import { Component } from '@angular/core';

import { LogoIcon } from './../../models/icon.model';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  //TODO: change LogoUrl to internal file for future proofing
  public logoIcon: LogoIcon = { name: 'typescript', logoUrl: '' };
  constructor() {}
}
