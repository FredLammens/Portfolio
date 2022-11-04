import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Job } from '../models/timeLine.model';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent {
  @Input()
  public jobs: Array<Job> = [];
  constructor() {}
}
