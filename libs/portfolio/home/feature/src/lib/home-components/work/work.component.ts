import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Project } from '@fred/portfolio/home/data-access';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkComponent {
  public projects: Array<Project> = [
    { tags: [], tech: [], githubLink: '', webisteLink: '' },
    { tags: [], tech: [], githubLink: '', webisteLink: '' },
  ];
  constructor() {}
}
