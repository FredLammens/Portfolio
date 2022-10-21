import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkComponent {
  constructor() {}
}
