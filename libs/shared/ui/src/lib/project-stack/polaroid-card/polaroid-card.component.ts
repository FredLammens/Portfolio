import { Component, Input } from '@angular/core';

import { ImgInfo } from './../../models/projectstack.model';

@Component({
  selector: 'polaroid-card',
  templateUrl: './polaroid-card.component.html',
  styleUrls: ['./polaroid-card.component.scss'],
})
export class PolaroidCardComponent {
  @Input()
  public imgInfo: ImgInfo = { src: 'assets/img/placeholder.png', alt: 'placeholder' };
}
