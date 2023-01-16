import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DialogService, DialogType } from '@fred/shared/util/dialog';

import { Project, State, TechStack } from '../models/project.model';

@Component({
  selector: 'project-work-card',
  templateUrl: './project-work-card.component.html',
  styleUrls: ['./project-work-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectWorkCardComponent implements OnInit {
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

  public tag: 'Web' | 'Android' | 'IOS' = 'Web';

  public constructor(private dialogService: DialogService) {}

  public ngOnInit(): void {
    this.tag = this.getTag();
  }

  public getTag(): 'Web' | 'Android' | 'IOS' {
    if (this.project.tags.includes('Web')) {
      return 'Web';
    } else {
      if (this.project.tags.includes('IOS')) {
        return 'IOS';
      }
      return 'Android';
    }
  }

  public openDialog(): void {
    this.dialogService.showDialog('dfs', undefined, DialogType.info);
  }
}
