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
 * parent needs to be scrollable element => add css :   set fixed height (100vh) +  overflow: auto;
 * @example
 * <div intersectObserver>
 *  <navigation [singlePageAnchors]="anchors"></navigation>
 *  <hero (toCheck)="setActiveAnchor($event)" id="Home"></hero>
 *  <about (toCheck)="setActiveAnchor($event)" id="About"></about>
 *  <work (toCheck)="setActiveAnchor($event)" id="Work"></work>
 *  <skills (toCheck)="setActiveAnchor($event)" id="Skills"></skills>
 *  <contact (toCheck)="setActiveAnchor($event)" id="Contact"></contact>
 * </div>
 * Extra info : https://blog.webdevsimplified.com/2022-01/intersection-observer/
 *  TODO: check this to make is visible or not instead of intersects (is what makes it buggy ) https://medium.com/@joosep.parts/how-to-use-intersection-observer-api-with-a-directive-e86f0253c207
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
  @Input() public threshold = [0.2];

  constructor() {
    // As each observable child attaches itself to the parent observer, we need to
    // map Elements to Callbacks so that when an Element's intersection changes,
    // we'll know which callback to invoke. For this, we'll use an ES6 Map.
    this.mapping = new Map();

    // no root = browser viewport | root: element.nativeElement, if you want to use it inside div (now removed for navigation sake)
    /**
     * .container {
     * height: 100vh;
     * overflow: auto;
     * }
     *  => class on div
     */
    const options = {
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    };

    this.observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        const callback = this.mapping.get(entry.target);
        callback && callback(entry.isIntersecting);
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
  @Output() public readonly toCheck = new EventEmitter<{
    elementId: string;
    isIntersecting: boolean;
  }>();

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
      if (isIntersecting)
        this.toCheck.next({ elementId: this.elementRef.nativeElement.id, isIntersecting });
    });
  }
}
