import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'desktop-frame',
  templateUrl: './desktop-frame.svg',
  styleUrls: ['./desktop-frame.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesktopFrameComponent {
  @Input() public desktopWebImg = 'assets/img/placeholder.png';
}
