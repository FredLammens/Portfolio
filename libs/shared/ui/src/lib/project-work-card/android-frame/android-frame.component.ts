import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'android-frame',
  templateUrl: './android-frame.svg',
  styleUrls: ['./android-frame.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AndroidFrameComponent {
  constructor() {}
}
