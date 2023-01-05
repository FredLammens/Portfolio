import { ChangeDetectionStrategy, Component } from '@angular/core';
//change to project-work-card => project card already exist in kanban board
@Component({
  selector: 'project-work-card',
  templateUrl: './project-work-card.component.html',
  styleUrls: ['./project-work-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectWorkCardComponent {
  constructor() {}
}
