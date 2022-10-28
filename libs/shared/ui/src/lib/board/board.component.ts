import { Component, Input } from '@angular/core';

import { Project, State } from '../models/project.model';

@Component({
  selector: 'kanban-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  @Input()
  public projects: Array<Project> = [
    { tags: [], tech: [], githubLink: '', webisteLink: '', state: State.Backlog },
    { tags: [], tech: [], githubLink: '', webisteLink: '', state: State.InProgess },
    { tags: [], tech: [], githubLink: '', webisteLink: '', state: State.Done },
  ];

  constructor() {}
}
