import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'android-frame',
  templateUrl: './android-frame.svg',
  styleUrls: ['./android-frame.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AndroidFrameComponent {
  @Input() public androidWebImg = 'assets/img/placeholder.png';
}
