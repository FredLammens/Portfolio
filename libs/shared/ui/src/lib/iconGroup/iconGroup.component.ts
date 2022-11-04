import { Component } from '@angular/core';

import { LogoIcon } from './../models/icon.model';

@Component({
  selector: 'iconGroup',
  templateUrl: './iconGroup.component.html',
  styleUrls: ['./iconGroup.component.scss'],
})
export class IconGroupComponent {
  public icons: Array<LogoIcon> = [
    { name: 'Typescript', logoUrl: 'assets/img/placeholder.png', color: 'green' },
    { name: 'HTML5', logoUrl: 'assets/img/placeholder.png', color: 'blue' },
    { name: 'Sass', logoUrl: 'assets/img/placeholder.png' },
    { name: 'CSS3', logoUrl: 'assets/img/placeholder.png' },
    { name: 'Javascript', logoUrl: 'assets/img/placeholder.png' },
    { name: 'C#', logoUrl: 'assets/img/placeholder.png' },
    { name: 'Node JS', logoUrl: 'assets/img/placeholder.png' },
    { name: 'Angular', logoUrl: 'assets/img/placeholder.png' },
    { name: 'Git', logoUrl: 'assets/img/placeholder.png' },
    { name: 'dummy', logoUrl: 'assets/img/placeholder.png' },
    { name: 'dummy', logoUrl: 'assets/img/placeholder.png' },
    { name: 'dummy', logoUrl: 'assets/img/placeholder.png' },
    { name: 'dummy', logoUrl: 'assets/img/placeholder.png' },
    { name: 'dummy', logoUrl: 'assets/img/placeholder.png' },
    { name: 'dummy', logoUrl: 'assets/img/placeholder.png' },
  ];
  constructor() {}
}
