import { Component, Input } from '@angular/core';

import { Project, State } from '../models/project.model';

@Component({
  selector: 'kanban-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  public projectsDone: Array<Project> = [];
  public projectsBacklog: Array<Project> = [];
  public projectsInProgress: Array<Project> = [];
  @Input()
  public set projects(projs: Array<Project>) {
    this.projectsBacklog = [];
    this.projectsDone = [];
    this.projectsInProgress = [];
    projs.forEach((proj) => {
      if (proj.state === State.Backlog) this.projectsBacklog.push(proj);
      if (proj.state === State.InProgess) this.projectsInProgress.push(proj);
      if (proj.state === State.Done) this.projectsDone.push(proj);
    });
  }
}
