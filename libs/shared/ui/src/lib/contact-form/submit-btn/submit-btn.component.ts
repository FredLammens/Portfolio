import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  Renderer2,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'submit-btn',
  templateUrl: './submit-btn.component.html',
  styleUrls: ['./submit-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmitBtnComponent {
  @ViewChild('jsBtn')
  public btn: ElementRef | undefined;

  @ViewChild('jsTimer')
  public timer: ElementRef | undefined;

  public constructor(private renderer: Renderer2) {}

  public animateSubmit(): void {
    if (this.btn?.nativeElement.classList.contains('do-submit')) return;
    //do clicked animation
    this.renderer.addClass(this.btn?.nativeElement, 'do-submit');
    //set amountLoaded as if receiving 0-100% values
    setTimeout(() => {
      this.doTimer(0);
    }, 1200);

    setTimeout(() => {
      this.doTimer(15);
    }, 1200);

    setTimeout(() => {
      this.doTimer(75);
    }, 2000);

    setTimeout(() => {
      this.doTimer(100);
    }, 2800);

    setTimeout(() => {
      this.resetButton();
    }, 5000);
  }

  private doTimer(amountLoaded: number): void {
    const strokeOffset = 3.83 * (100 - amountLoaded) + 'px';
    this.renderer.setStyle(this.timer?.nativeElement, 'strokeDashoffset', strokeOffset);
    if (amountLoaded === 100) {
      setTimeout(() => {
        this.renderer.addClass(this.btn?.nativeElement, 'success');
      }, 500);
    }
  }

  private resetButton() {
    this.renderer.addClass(this.btn?.nativeElement, 'reset');
    setTimeout(() => {
      this.renderer.removeClass(this.btn?.nativeElement, 'success');
      this.renderer.removeClass(this.btn?.nativeElement, 'do-submit');
      this.renderer.removeClass(this.btn?.nativeElement, 'reset');
    }, 500);
    this.renderer.setStyle(this.timer?.nativeElement, 'strokeDashoffset', '383px');
  }
}
