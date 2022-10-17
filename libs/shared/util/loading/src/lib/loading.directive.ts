/* eslint-disable @angular-eslint/directive-selector */
import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnInit,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { Observable, Subject, AsyncSubject } from 'rxjs';
import { concatMapTo, takeUntil, skip } from 'rxjs/operators';

/** used for the primary condition */
export interface ObserveContext<T> {
  $implicit: T; // used to bind any value (let val, doo, whatever)
  fbaObserve: T; // used to bind the as keyword
}

/** used fot let-error tag in the errorTemplate */
export interface ErrorContext {
  $implicit: Error;
}

/**
 * structural directive that autosubscribe / unsubscribe observable (like ngIf | async)
 * with loading - error - empty template rendering
 * make sure it's used on the list only, to not rerender any other subscriptions
 * example:
 * <p *observe="users$ as users; empty emptyTemplate; loading loadingTemplate; error errorTemplate;">
 * There are {{ users.length }} online.
 *  </p>
 *  <ng-template #loadingTemplate>
 *  <p>Loading ...</p>
 *  </ng-template>
 *  <ng-template #errorTemplate let-error>
 *  <p>{{ error }}</p>
 *  </ng-template>
 *  <ng-template #emptyTemplate>
 *  <p>the table is empty </p>
 *  </ng-template>
 */
@Directive({
  selector: '[observe]',
})
export class LoadingDirective<T> implements OnInit, OnDestroy {
  private errorRef: TemplateRef<ErrorContext>; // context containing actual error in $implicit prop, used to narrow templateref(let-error)

  private loadingRef: TemplateRef<null>; // cant provide meaningful context=> null rendered without context

  private emptyRef: TemplateRef<null>; // cant provide meaningful context=> null rendered without context

  private unsubscribe = new Subject<boolean>();

  private init = new AsyncSubject<void>();

  constructor(
    private view: ViewContainerRef, // allows manipulation of DOM by rendering templates in place of directive
    private nextRef: TemplateRef<ObserveContext<T>>, // reference to tag template (p,div,etc) => displaying next observable value
    private changes: ChangeDetectorRef, // make directive work with OnPush change detection
  ) {}

  public ngOnDestroy(): void {
    this.unsubscribe.next(true);
  }

  public ngOnInit(): void {
    this.showLoading();
    this.init.next();
    this.init.complete();
  }

  /** ----------------------------------- TEMPLATES INPUT ----------------------------------- */
  /** main setter for observable */
  @Input()
  public set fbaObserve(source: Observable<T>) {
    if (!source) {
      return;
    }
    this.showLoading();
    this.unsubscribe.next(true);
    this.init
      .pipe(concatMapTo(source), skip(1), takeUntil(this.unsubscribe)) // skip 1 = for the initial value of the state
      .subscribe(
        (value) => {
          if (value instanceof Array) {
            if (value.length === 0) {
              this.showEmpty();
            } else {
              this.showStandard(value);
            }
          }
        },
        (error) => {
          this.showError(error);
        },
      );
  }

  /** used for setting error template */
  @Input()
  public set fbaObserveError(ref: TemplateRef<ErrorContext>) {
    this.errorRef = ref;
  }

  /** used for setting loading template */
  @Input()
  public set fbaObserveLoading(ref: TemplateRef<null>) {
    this.loadingRef = ref;
  }

  /** used for setting loading template */
  @Input()
  public set fbaObserveEmpty(ref: TemplateRef<null>) {
    this.emptyRef = ref;
  }
  /** ----------------------------------- TEMPLATES INPUT END ----------------------------------- */

  /** ----------------------------------- SHOW TEMPLATES ----------------------------------- */
  /** clearing the template before creating the view to not have multiple templates rendered */
  private showLoading(): void {
    if (this.loadingRef) {
      this.view.clear();
      this.view.createEmbeddedView(this.loadingRef);
    }
  }

  private showEmpty(): void {
    if (this.emptyRef) {
      this.view.clear();
      this.view.createEmbeddedView(this.emptyRef);
      this.changes.markForCheck();
    }
  }

  private showStandard(value: T): void {
    this.view.clear();
    this.view.createEmbeddedView(this.nextRef, {
      $implicit: value,
      fbaObserve: value,
    });
    this.changes.markForCheck();
  }

  private showError(error: Error): void {
    if (this.errorRef) {
      this.view.clear();
      this.view.createEmbeddedView(this.errorRef, {
        $implicit: error,
      });
      this.changes.markForCheck();
    }
  }
  /** ----------------------------------- SHOW TEMPLATES END ----------------------------------- */
}
