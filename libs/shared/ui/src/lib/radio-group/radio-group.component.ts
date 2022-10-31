import { Component, Input, EventEmitter, Output } from '@angular/core';

import { radioGroup } from '../models/radioGroup.model';

@Component({
  selector: 'radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
})
export class RadioGroupComponent {
  @Output()
  public groupSelected = new EventEmitter<string>();

  @Input()
  public radioGroups: Array<radioGroup> = [];

  @Input()
  public groupName = '';

  public inputClicked(radioName: string): void {
    this.groupSelected.next(radioName);
  }
}
