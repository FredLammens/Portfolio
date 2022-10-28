import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Project, radioGroup, State } from '@fred/shared/ui';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkComponent {
  public projects: Array<Project> = [
    {
      tags: [],
      tech: [],
      githubLink: '',
      webisteLink: '',
      title: '',
      description: '',
      state: State.Backlog,
      img: '',
      imgSrc: '',
      date: new Date(),
    },
    {
      tags: [],
      tech: [],
      githubLink: '',
      webisteLink: '',
      title: '',
      description: '',
      state: State.InProgess,
      img: '',
      imgSrc: '',
      date: new Date(),
    },
    {
      tags: [],
      tech: [],
      githubLink: '',
      webisteLink: '',
      title: '',
      description: '',
      state: State.Done,
      img: '',
      imgSrc: '',
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
