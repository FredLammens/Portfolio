import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialComponent {
  constructor() {}
}
