import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'iOS-frame',
  templateUrl: './iOS-frame.svg',
  styleUrls: ['./iOS-frame.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IOSFrameComponent {
  constructor() {}
}
