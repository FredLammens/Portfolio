import { Component } from '@angular/core';

import { LogoIcon } from './../models/icon.model';

@Component({
  selector: 'app-iconGroup',
  templateUrl: './iconGroup.component.html',
  styleUrls: ['./iconGroup.component.scss'],
})
export class IconGroupComponent {
  public icons: Array<LogoIcon> = [{ name: 'Typescript', logoUrl: '' }];
  constructor() {}
}
