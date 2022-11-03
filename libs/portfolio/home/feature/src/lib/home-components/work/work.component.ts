import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Project, radioGroup, State, TechStack } from '@fred/shared/ui';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkComponent {
  //add filtering to projets =>  if one of the buttons are pressed
  public projects: Array<Project> = [
    {
      tags: ['Web', 'Mobile'],
      tech: [TechStack.Angular, TechStack.NxWorkspace],
      githubLink: '',
      webisteLink: 'https://frederic-lammens.netlify.app/home',
      title: 'Portfolio',
      description: 'A small website showcasing my curriculum vitae in a fun responsive web format',
      state: State.Backlog,
      img: 'portfolio',
      imgSrc: 'assets/img/portfolio.png',
      date: new Date(),
    },
    {
      tags: ['Web', 'Mobile'],
      tech: [TechStack.Angular, TechStack.NxWorkspace],
      githubLink: '',
      webisteLink: 'https://frederic-lammens.netlify.app/home',
      title: 'Portfolio',
      description: 'A small website showcasing my curriculum vitae in a fun responsive web format',
      state: State.InProgess,
      img: 'portfolio',
      imgSrc: 'assets/img/portfolio.png',
      date: new Date(),
    },
    {
      tags: ['Web', 'Mobile'],
      tech: [TechStack.Angular, TechStack.NxWorkspace],
      githubLink: '',
      webisteLink: 'https://frederic-lammens.netlify.app/home',
      title: 'Portfolio',
      description: 'A small website showcasing my curriculum vitae in a fun responsive web format',
      state: State.Done,
      img: 'PlaceHolder',
      imgSrc: 'assets/img/placeholder.png',
      date: new Date(),
    },
  ];
  // later inside service
  private _projects: Array<Project> = [
    {
      tags: ['Web', 'Mobile'],
      tech: [TechStack.Angular, TechStack.NxWorkspace],
      githubLink: '',
      webisteLink: 'https://frederic-lammens.netlify.app/home',
      title: 'Portfolio',
      description: 'A small website showcasing my curriculum vitae in a fun responsive web format',
      state: State.Backlog,
      img: 'portfolio',
      imgSrc: 'assets/img/portfolio.png',
      date: new Date(),
    },
    {
      tags: ['Web'],
      tech: [TechStack.Angular, TechStack.NxWorkspace],
      githubLink: '',
      webisteLink: 'https://frederic-lammens.netlify.app/home',
      title: 'Portfolio',
      description: 'A small website showcasing my curriculum vitae in a fun responsive web format',
      state: State.InProgess,
      img: 'portfolio',
      imgSrc: 'assets/img/portfolio.png',
      date: new Date(),
    },
    {
      tags: ['Mobile'],
      tech: [TechStack.Angular, TechStack.NxWorkspace],
      githubLink: '',
      webisteLink: 'https://frederic-lammens.netlify.app/home',
      title: 'Portfolio',
      description: 'A small website showcasing my curriculum vitae in a fun responsive web format',
      state: State.Done,
      img: 'PlaceHolder',
      imgSrc: 'assets/img/placeholder.png',
      date: new Date(),
    },
  ];

  public radioGroups: Array<radioGroup> = [
    { name: 'ALL', emoji: '' },
    { name: 'Web', emoji: '💻' },
    { name: 'Mobile', emoji: '📱' },
  ];

  public selectedGroup(tag: string): void {
    if (tag === 'ALL') {
      this.projects = this._projects;
      return;
    }
    this.projects = this._projects.filter((v) => v.tags.includes(tag));
  }
}
