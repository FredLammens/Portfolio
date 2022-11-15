import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  ViewContainerRef,
} from '@angular/core';

import { TooltipPosition } from './../models/tooltip.model';

import { TooltipComponent } from './tooltip.component';

@Directive({
  selector: '[tooltip]',
})
/**
 * @example
 * <div [tooltip]="'Sign In'" position="right"></div>
 */
export class TooltipDirective implements OnDestroy {
  @Input() public tooltip = '';
  @Input() public position: TooltipPosition = TooltipPosition.DEFAULT;

  private myPopup?: ComponentRef<TooltipComponent>;

  constructor(private viewContainerRef: ViewContainerRef, private el: ElementRef) {}
  public ngOnDestroy(): void {
    if (this.myPopup) {
      this.myPopup.destroy();
    }
  }

  @HostListener('mouseenter') public onMouseEnter() {
    if (this.myPopup?.instance === null) {
      return;
    }
    const { left, right, top, bottom } = this.el.nativeElement.getBoundingClientRect();
    let leftpositionPopup = 0;
    let topPositionPopup = 0;
    // width or height of tooltip itself added
    switch (this.position) {
      case TooltipPosition.BELOW: {
        leftpositionPopup = Math.round((right - left) / 2 + left);
        topPositionPopup = Math.round(bottom) + 13;
        break;
      }
      case TooltipPosition.ABOVE: {
        leftpositionPopup = Math.round((right - left) / 2 + left);
        topPositionPopup = Math.round(top) - 13;
        break;
      }
      case TooltipPosition.RIGHT: {
        leftpositionPopup = Math.round(right);
        topPositionPopup = Math.round(top + (bottom - top) / 2);
        break;
      }
      case TooltipPosition.LEFT: {
        leftpositionPopup = Math.round(left);
        topPositionPopup = Math.round(top + (bottom - top) / 2);
        break;
      }
      case TooltipPosition.TOPRIGHT: {
        leftpositionPopup = Math.round(right);
        topPositionPopup = Math.round(top) - 13;
        break;
      }
      default: {
        break;
      }
    }
    this.createTooltipPopup(leftpositionPopup, topPositionPopup + 5);
  }

  @HostListener('mouseleave') public onMouseLeave() {
    if (this.myPopup) {
      this.myPopup.destroy();
    }
  }

  @HostListener('mousemove', ['$event'])
  public onMouseMove($event: MouseEvent): void {
    if (this.myPopup !== null && this.position === TooltipPosition.DYNAMIC) {
      this.createTooltipPopup($event.clientX, $event.clientY);
    }
  }

  private createTooltipPopup(left: number, top: number) {
    this.myPopup = this.viewContainerRef.createComponent(TooltipComponent);
    this.myPopup.instance.top = top;
    this.myPopup.instance.left = left;
    this.myPopup.instance.tooltip = this.tooltip;
  }
}
