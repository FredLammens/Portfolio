import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { LogoIcon } from './../models/icon.model';

@Component({
  selector: 'iconGroup',
  templateUrl: './iconGroup.component.html',
  styleUrls: ['./iconGroup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconGroupComponent {
  @Input()
  public icons: Array<LogoIcon> = [];
  constructor() {}
}
