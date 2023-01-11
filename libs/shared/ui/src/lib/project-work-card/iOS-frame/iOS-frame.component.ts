import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'iOS-frame',
  templateUrl: './iOS-frame.svg',
  styleUrls: ['./iOS-frame.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IOSFrameComponent {
  @Input() public iOSWebImg = 'assets/img/placeholder.png';
}
