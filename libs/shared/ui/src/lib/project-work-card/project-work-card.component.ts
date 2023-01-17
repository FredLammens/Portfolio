import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DialogType } from '@fred/shared/util/dialog';

import { Project, State, TechImgMap, techMap, TechStack } from '../models/project.model';

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

  public chips: Array<{ name: string; color: string; img: string }> = [];

  public tag: 'Web' | 'Android' | 'IOS' = 'Web';

  public DialogTypeEnum = DialogType;

  public constructor() {}

  public ngOnInit(): void {
    this.tag = this.getTag();
    this.getChips();
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

  public getChips(): void {
    if (this.project.tech) {
      for (let tech = 0; tech < this.project.tech.length; tech++) {
        const element = this.project.tech[tech];
        const techStackName = TechStack[element];
        const techStackColor = techMap.get(element);
        const techImg = TechImgMap.get(element);
        const techObj = {
          name: techStackName,
          color: techStackColor ? techStackColor : '',
          img: techImg ? techImg : 'placeholder',
        };
        this.chips.push(techObj);
      }
    }
  }
}
