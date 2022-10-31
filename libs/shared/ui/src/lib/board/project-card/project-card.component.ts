import { Component, Input } from '@angular/core';

import { Project, State } from './../../models/project.model';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input()
  public project: Project = {
    tags: [],
    tech: [],
    githubLink: '',
    webisteLink: '',
    title: 'Default',
    description: 'Default description',
    state: State.Backlog,
    img: 'altImg',
    imgSrc: 'assets/img/placeholder.png',
    date: new Date(),
  };
  constructor() {}
}
