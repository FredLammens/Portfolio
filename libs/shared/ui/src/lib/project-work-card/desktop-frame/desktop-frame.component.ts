import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'desktop-frame',
  templateUrl: './desktop-frame.svg',
  styleUrls: ['./desktop-frame.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesktopFrameComponent {
  constructor() {}
}
