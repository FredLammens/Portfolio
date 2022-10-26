/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @angular-eslint/directive-selector */
import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

/**
 * directive to bind to the parent to check what children are visible to be used together with toCheck Directive
 * @example
 * <div intersectObserver>
 *  <navigation [singlePageAnchors]="anchors"></navigation>
 *  <hero (toCheck)="setActiveAnchor($event)" id="Home"></hero>
 *  <about (toCheck)="setActiveAnchor($event)" id="About"></about>
 *  <work (toCheck)="setActiveAnchor($event)" id="Work"></work>
 *  <skills (toCheck)="setActiveAnchor($event)" id="Skills"></skills>
 *  <contact (toCheck)="setActiveAnchor($event)" id="Contact"></contact>
 * </div>

 */
@Directive({
  selector: '[intersectObserver]',
})
export class IntersectDirective implements OnDestroy {
  private mapping: Map<Element, Function>;
  private observer: IntersectionObserver;

  // This classifies the "intersection" as being a bit outside the
  // viewport. The intent here is give the elements a little time to react
  // to the change before the element is actually visible to the user.
  // must be in pixels or percentage
  // '300px 0px 300px 0px'
  @Input() public rootMargin = '0%';

  /**
   * threshold for indicating at what percentage function should be callled
   */
  @Input() public threshold = 0;

  constructor() {
    // As each observable child attaches itself to the parent observer, we need to
    // map Elements to Callbacks so that when an Element's intersection changes,
    // we'll know which callback to invoke. For this, we'll use an ES6 Map.
    this.mapping = new Map();

    // no root = browser viewport
    const options = {
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    };

    const isIntersecting = (entry: IntersectionObserverEntry) =>
      entry.isIntersecting || entry.intersectionRatio > 0;

    this.observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        const callback = this.mapping.get(entry.target);

        callback && callback(isIntersecting(entry));
      }
    }, options);
  }

  // ---
  // PUBLIC METHODS.
  // ---

  // I add the given Element for intersection observation. When the intersection status
  // changes, the given callback is invoked with the new status.
  public add(element: HTMLElement, callback: Function): void {
    this.mapping.set(element, callback);
    this.observer.observe(element);
  }

  // I get called once when the host element is being destroyed.
  public ngOnDestroy(): void {
    this.mapping.clear();
    this.observer.disconnect();
  }

  // I remove the given Element from intersection observation.
  public remove(element: HTMLElement): void {
    this.mapping.delete(element);
    this.observer.unobserve(element);
  }
}

/**
 * directive to check what children are visible
 * @output
 * id of element in the view
 */
@Directive({ selector: '[toCheck]' })
export class ToCheckDirective implements OnDestroy, OnInit {
  @Output() public readonly toCheck = new EventEmitter<string>();

  private elementRef: ElementRef;
  private parent: IntersectDirective;

  // I initialize the intersection observer directive.
  constructor(parent: IntersectDirective, elementRef: ElementRef) {
    this.parent = parent;
    this.elementRef = elementRef;
  }

  // ---
  // PUBLIC METHODS.
  // ---

  // I get called once when the host element is being destroyed.
  public ngOnDestroy(): void {
    this.parent.remove(this.elementRef.nativeElement);
  }

  // I get called once after the inputs have been bound for the first time.
  public ngOnInit(): void {
    // using a shared observer in the parent element.
    // with a CALLBACK style approach so that we're reducing the number of IntersectionObserver instances. (cant acces children elemnets from parent directive)
    this.parent.add(this.elementRef.nativeElement, (isIntersecting: boolean) => {
      if (isIntersecting) this.toCheck.next(this.elementRef.nativeElement.id);
    });
  }
}
