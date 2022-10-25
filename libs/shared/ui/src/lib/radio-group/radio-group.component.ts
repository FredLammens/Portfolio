import { Component, Input } from '@angular/core';

import { radioGroup } from '../models/radioGroup.model';

@Component({
  selector: 'radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
})
export class RadioGroupComponent {
  @Input()
  public radioGroups: Array<radioGroup> = [];

  @Input()
  public groupName = '';

  constructor() {}
}
