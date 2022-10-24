import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkComponent {
  public filters = [
    { name: 'Web', isActive: false },
    { name: 'mobile', isActive: false },
    { name: 'All', isActive: true },
  ];
  constructor() {}
}
