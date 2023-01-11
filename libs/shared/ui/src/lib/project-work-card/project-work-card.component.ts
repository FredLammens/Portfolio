import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Project, State, TechStack } from '../models/project.model';

@Component({
  selector: 'project-work-card',
  templateUrl: './project-work-card.component.html',
  styleUrls: ['./project-work-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectWorkCardComponent {
  @Input() public isReverse = false;

  @Input() public project: Project = {
    tags: ['Web', 'Android'],
    tech: [TechStack.Angular, TechStack.NxWorkspace],
    githubLink: '',
    webisteLink: 'https://frederic-lammens.netlify.app/home',
    title: 'Portfolio',
    description: 'A small website showcasing my curriculum vitae in a fun responsive web format',
    state: State.Backlog,
    img: 'portfolio',
    imgSrc: 'assets/img/portfolio.png',
    date: new Date(),
  };
}
