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
  @ViewChild('btn')
  public btn: ElementRef | undefined;

  public constructor(private renderer: Renderer2) {}

  public animateSubmit(): void {
    //TODO: make this reactive
    //do clicked animation
    this.renderer.addClass(this.btn?.nativeElement, 'animate');
    //for now only 6 seconds
    //on reset button
    setTimeout(() => {
      this.renderer.removeClass(this.btn?.nativeElement, 'animate');
    }, 6000);
  }
}
