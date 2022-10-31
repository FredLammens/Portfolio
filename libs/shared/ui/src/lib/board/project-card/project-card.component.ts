import { Component, Input, OnInit } from '@angular/core';

import { TechStack } from '../../models/project.model';

import { Project, State, techMap, TechImgMap } from './../../models/project.model';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
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
  public chips: Array<{ name: string; color: string; img: string }> = [];

  public ngOnInit(): void {
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
