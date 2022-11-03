import { Component, Input } from '@angular/core';

import { LogoIcon } from './../../models/icon.model';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  //TODO: change LogoUrl to internal file for future proofing
  @Input()
  public logoIcon: LogoIcon = { name: 'typescript', logoUrl: 'assets/img/placeholder.png' };
  //todo: add icon color per logo for border ?
  constructor() {}
}
