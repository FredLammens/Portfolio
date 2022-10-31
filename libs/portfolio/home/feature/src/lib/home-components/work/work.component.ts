import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Project, radioGroup, State, Tag, TechStack } from '@fred/shared/ui';

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
      tags: [Tag.Web, Tag.Mobile],
      tech: [TechStack.Angular, TechStack.NxWorkspace],
      githubLink: '',
      webisteLink: 'https://frederic-lammens.netlify.app/home',
      title: 'Portfolio',
      description: 'A small website showcasing my curriculum vitae in a fun responsive web format',
      state: State.Backlog,
      img: 'PlaceHolder',
      imgSrc: 'assets/img/placeholder.png',
      date: new Date(),
    },
    {
      tags: [Tag.Web, Tag.Mobile],
      tech: [TechStack.Angular, TechStack.NxWorkspace],
      githubLink: '',
      webisteLink: 'https://frederic-lammens.netlify.app/home',
      title: 'Portfolio',
      description: 'A small website showcasing my curriculum vitae in a fun responsive web format',
      state: State.InProgess,
      img: 'PlaceHolder',
      imgSrc: 'assets/img/placeholder.png',
      date: new Date(),
    },
    {
      tags: [Tag.Web, Tag.Mobile],
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

  constructor() {}
}
