import { trigger, transition, style, animate } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Project, State } from '../models/project.model';

@Component({
  selector: 'kanban-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('easeInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('.3s ease-out', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('.3s ease-out', style({ transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class BoardComponent {
  public projectsDone: Array<Project> = [];
  public projectsBacklog: Array<Project> = [];
  public projectsInProgress: Array<Project> = [];

  public boards: { backlog: boolean | null; inProgress: boolean | null; done: boolean | null } = {
    backlog: null,
    inProgress: null,
    done: null,
  };

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

  public switch(board: string) {
    if (board === 'backlog') {
      this.boards.backlog = true;
      this.boards.inProgress = false;
      this.boards.done = false;
      return;
    }
    if (board === 'inProgress') {
      this.boards.backlog = false;
      this.boards.inProgress = true;
      this.boards.done = false;
      return;
    }
    if (board === 'done') {
      this.boards.backlog = false;
      this.boards.inProgress = false;
      this.boards.done = true;
      return;
    }
  }

  public goTo(url: string): void {
    window.open(url, '_blank');
  }
}
