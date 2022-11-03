import { Component } from '@angular/core';

import { LogoIcon } from './../models/icon.model';

@Component({
  selector: 'iconGroup',
  templateUrl: './iconGroup.component.html',
  styleUrls: ['./iconGroup.component.scss'],
})
export class IconGroupComponent {
  public icons: Array<LogoIcon> = [
    { name: 'Typescript', logoUrl: '' },
    { name: 'HTML5', logoUrl: '' },
    { name: 'Sass', logoUrl: '' },
    { name: 'CSS3', logoUrl: '' },
    { name: 'Javascript', logoUrl: '' },
    { name: 'C#', logoUrl: '' },
    { name: 'Node JS', logoUrl: '' },
    { name: 'Angular', logoUrl: '' },
    { name: 'Git', logoUrl: '' },
    { name: 'dummy', logoUrl: '' },
    { name: 'dummy', logoUrl: '' },
    { name: 'dummy', logoUrl: '' },
    { name: 'dummy', logoUrl: '' },
    { name: 'dummy', logoUrl: '' },
    { name: 'dummy', logoUrl: '' },
  ];
  constructor() {}
}
