import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'project-work-card',
  templateUrl: './project-work-card.component.html',
  styleUrls: ['./project-work-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectWorkCardComponent {
  constructor() {}
}
