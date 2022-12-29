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
    //do  loading animation
    this.renderer.addClass(this.btn?.nativeElement, 'animate');
    this.renderer.addClass(this.btn?.nativeElement, 'circle');
    //when succesfull
    setTimeout(() => {
      this.renderer.removeClass(this.btn?.nativeElement, 'circle'); //remove loading
      this.renderer.addClass(this.btn?.nativeElement, 'success'); //set success check
    }, 1000);

    //when error
    // setTimeout(() => {
    //   this.renderer.removeClass(this.btn?.nativeElement, 'circle'); //remove loading
    //   this.renderer.addClass(this.btn?.nativeElement, 'error'); //set success check
    // }, 1000);

    //reset button
    setTimeout(() => {
      this.renderer.removeClass(this.btn?.nativeElement, 'error'); //change this based on success or error
      this.renderer.removeClass(this.btn?.nativeElement, 'animate');
    }, 3000);
  }
}
