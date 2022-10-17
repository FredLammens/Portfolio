import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

/** This class can be used to implement the core mechanics that concern themselves with subscriptions and their state upon a component's destruction.
 * I.e. destroy subscriptions upon the components distruction to minimize chances of memory leaks.
 * Do note: When a component extends this class, but explicitly defines ngOnDestroy, this class' destroy will be overwritten and not executed.
 * To resolve this issue, you can use the `destroy` method instead, that will be exectued within the ngOnDestroy implementation of this class.
 * @export
 * @class DestroyBase
 * @example
 *
 * export class TestComponent extends DestroyBase {
 *
 *  public constructor(route: ActivatedRoute) {
 *    super();
 *    route.params.pipe(takeUntil(this.destroy$)).subscribe()
 *  }
 *
 * }
 *
 */
@Directive()
export class DestroyBase implements OnDestroy {
  /** This subject will emit true when the component is destroyed. Use this to unsubscribe with `takeUntil`. */
  public destroy$: Subject<void> = new Subject();

  /** A lifecycle hook that is called when a directive, pipe, or service is destroyed.
   * Use for any custom cleanup that needs to occur when the instance is destroyed.
   */
  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
    this.onDestroy();
  }

  //use to call extra functions after destroying subscription
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public onDestroy() {}
}
