/* eslint-disable @angular-eslint/directive-selector */
import { NgModel } from '@angular/forms';
import { debounceTime, distinctUntilChanged, skip } from 'rxjs/operators';
import { Directive, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

/**
 * to be used in combination with ngModel to add a debounce time to it's value
 * ex:
 * <input [ngModel]="someValue" (ngModelChangeDebounced)="someValue = $event">
 * ---------------------------------------------------------------------------
 * set debounce time : [ngModelChangeDebounceTime]="200"
 */
@Directive({
  selector: '[ngModelChangeDebounced]',
})
export class NgModelChangeDebouncedDirective implements OnDestroy {
  @Output()
  public readonly ngModelChangeDebounced = new EventEmitter<any>();

  @Input()
  public ngModelChangeDebounceTime = 500; // optional, 500 default

  private subscription: Subscription;

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  constructor(private ngModel: NgModel) {
    this.subscription = this.ngModel.control.valueChanges
      .pipe(
        skip(1), // skip initial value
        distinctUntilChanged(),
        debounceTime(this.ngModelChangeDebounceTime),
      )
      .subscribe((value) => this.ngModelChangeDebounced.emit(value));
  }
}
