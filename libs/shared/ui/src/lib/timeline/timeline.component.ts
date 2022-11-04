import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Job } from '../models/timeLine.model';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent {
  public times: Array<Job> = [
    {
      year: '2022',
      jobInfo: [
        {
          Title: 'Analyst Developer',
          Company: 'CTG',
        },
      ],
    },
  ];
  constructor() {}
}
