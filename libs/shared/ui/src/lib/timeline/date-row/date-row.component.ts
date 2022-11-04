import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Job } from '../../models/timeLine.model';

@Component({
  selector: 'date-row',
  templateUrl: './date-row.component.html',
  styleUrls: ['./date-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateRowComponent {
  @Input()
  public job!: Job;
  constructor() {}
}
