/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable max-classes-per-file */
import { Directive, Inject, Input, TemplateRef, ViewContainerRef, NgModule } from '@angular/core';

const MAX_VALUE = 0x10000;

export class RepeatTimesContext {
  public constructor(public readonly $implicit: number) {}
}

@Directive({
  selector: '[repeatTimes][repeatTimesOf]',
})
export class RepeatTimesDirective {
  @Input()
  public set repeatTimesOf(count: number) {
    const safeCount = Math.floor(Math.max(0, Math.min(count, MAX_VALUE)));
    const { length } = this.viewContainer;

    if (safeCount < length) {
      this.removeContainers(length - safeCount);
    } else {
      this.addContainers(length, safeCount);
    }
  }

  constructor(
    @Inject(ViewContainerRef) private readonly viewContainer: ViewContainerRef,
    @Inject(TemplateRef)
    private readonly templateRef: TemplateRef<RepeatTimesContext>,
  ) {}

  private addContainers(length: number, count: number) {
    for (let index = length; index < count; index++) {
      this.viewContainer.createEmbeddedView<RepeatTimesContext>(
        this.templateRef,
        new RepeatTimesContext(index),
      );
    }
  }

  private removeContainers(amount: number) {
    for (let index = 0; index < amount; index++) {
      this.viewContainer.remove();
    }
  }
}

@NgModule({
  declarations: [RepeatTimesDirective],
  exports: [RepeatTimesDirective],
})
export class ReapeatModule {}
