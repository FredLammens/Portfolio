/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable max-classes-per-file */
// scroll-end.directive.tsimport { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Optional, Output } from '@angular/core';
// import { ScrollEndRootDirective } from './scroll-end-root.directive';

import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
} from '@angular/core';

// eslint-disable-next-line no-shadow
export enum ScrollendDirection {
  DOWN = 'down',
  UP = 'UP',
}

/**
 * the component has fixed height + overflow auto
 * when ngFor notifications reaches end it shows loading spinner div
 * when this happens the intersectionObserver is triggered and passes the event to scrollEnd
 *
 * the event is only triggered if the user either scrolled in the opposite direction or the elemetn was scrolled out of screen at least once
 * reverse behaviour if you set desiredDirection to up
 *
 * you can buffer a margin with rootMargin (ex: 0 0 100px 0) => trigered when end of list is 100px away from viewport
 *
 * scrollEndRoot = optional => attached to the viewport of the browser (for ex one full screen table on entire page)
 * @example
 * <div class="notifications" scrollEndRoot>
 *  <div *ngFor="let notification of notifications$ | async">...</div>
 *  <div (scrollEnd)="loadMore()" rootMargin="0px 0px 100px 0">
 *    <loading-spinner *ngIf="loading$ | async)"></loading-spinner>
 *  </div>
 * </div>
 */
@Directive({
  selector: '[scrollEnd]',
})
export class ScrollEndDirective implements OnInit, OnDestroy {
  @Output() public scrollEnd: EventEmitter<any> = new EventEmitter();

  @Input() public rootMargin = '0px 0px 0px 0px';

  @Input() public desiredDirection: ScrollendDirection =
    ScrollendDirection.DOWN;

  private observer: IntersectionObserver;

  private previousEntry: IntersectionObserverEntry;

  private scrollDirection: ScrollendDirection;

  public constructor(
    private el: ElementRef,
    @Optional() private scrollEndRoot: ScrollEndRootDirective,
  ) {}

  public ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          this.scrollDirection =
            this.previousEntry?.boundingClientRect.bottom >
            entry.boundingClientRect.bottom
              ? ScrollendDirection.DOWN
              : ScrollendDirection.UP;

          if (
            !this.previousEntry?.isIntersecting &&
            entry.isIntersecting &&
            this.scrollDirection === this.desiredDirection
          ) {
            console.log('emit');
            this.scrollEnd.emit();
          }

          this.previousEntry = entry;
        });
      },
      {
        root: this.scrollEndRoot?.el.nativeElement,
        rootMargin: this.rootMargin,
      },
    );

    this.observer.observe(this.el.nativeElement);
  }

  public ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
/**
 * Serves as optional maraker if event should not be attached to the document
 */
@Directive({
  selector: '[scrollEndRoot]',
})
export class ScrollEndRootDirective {
  constructor(public el: ElementRef) {}
}
