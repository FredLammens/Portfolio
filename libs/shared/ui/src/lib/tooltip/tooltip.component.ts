import { Component } from '@angular/core';

import { TooltipPosition } from '../models/tooltip.model';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  public tooltip = '';
  //change this to auto add the px to it
  public left = 0;
  public top = 0;
  public position: TooltipPosition = TooltipPosition.DEFAULT;
  constructor() {}
}
