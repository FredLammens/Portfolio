import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Project, State, TechStack } from '@fred/shared/ui';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkComponent {
  // later inside service
  public projects: Array<Project> = [
    {
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
      tags: ['IOS'],
      tech: [TechStack.Angular, TechStack.NxWorkspace],
      githubLink: '',
      webisteLink: 'https://frederic-lammens.netlify.app/home',
      title: 'Portfolio',
      description: 'A small website showcasing my curriculum vitae in a fun responsive web format',
      state: State.Done,
      img: 'PlaceHolder',
      imgSrc: 'assets/img/portfolio.png',
      date: new Date(),
    },
  ];
}
