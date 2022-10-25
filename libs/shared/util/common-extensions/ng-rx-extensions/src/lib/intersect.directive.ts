import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output,OnDestroy } from '@angular/core';
/* eslint-disable @angular-eslint/directive-selector */
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime } from 'rxjs/operators';



@Directive({
  selector: '[isVisible]',
})
export class IntersectDirective implements AfterViewInit, OnDestroy  {
  /**
   * notify when element is visisble
   */
  @Output() public readonly isVisible = new EventEmitter<{entry: IntersectionObserverEntry;}>();
  @Input() public debounceTime = 0;
  /**
   * threshold for indicating at what percentage function should be callled
   */
  @Input() public threshold = 0.8;

  private observer?: IntersectionObserver;

  private debouncer$$ = new Subject<{entry: IntersectionObserverEntry}>

  private sub$ = this.debouncer$$.pipe(debounceTime(this.debounceTime)).subscribe((val:{entry: IntersectionObserverEntry;}) => this.isVisible.emit(val))

  constructor(private element: ElementRef) {
  }

  public ngAfterViewInit(): void {
      // no root = browser viewport
      const options = {
        rootMargin: '0px',
        threshold: this.threshold,
      };

      const isIntersecting = (entry: IntersectionObserverEntry) =>
        entry.isIntersecting || entry.intersectionRatio > 0;

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (isIntersecting(entry)) {
            this.debouncer$$.next({ entry });
          }
        });
      }, options);

      this.observer?.observe(this.element.nativeElement);
  }

  public ngOnDestroy(): void {
    this.observer?.disconnect();
    this.sub$.unsubscribe();
  }

}
