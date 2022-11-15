import { Component, Input } from '@angular/core';

import { ImgInfo } from './../models/projectstack.model';

@Component({
  selector: 'project-stack',
  templateUrl: './project-stack.component.html',
  styleUrls: ['./project-stack.component.scss'],
})
export class ProjectStackComponent {
  //TODO: add max 3 ?
  @Input()
  public imgs: Array<ImgInfo> = [
    { src: 'assets/img/placeholder.png', alt: 'placeholder' },
    { src: 'assets/img/placeholder.png', alt: 'placeholder' },
    { src: 'assets/img/placeholder.png', alt: 'placeholder' },
  ];
  constructor() {}
}
