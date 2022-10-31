import { Component, Input } from '@angular/core';

@Component({
  selector: 'chip',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})
export class ChipsComponent {
  @Input()
  public text = 'placeholderText';

  @Input()
  public color = '';

  @Input()
  public set cardImg(img: string) {
    this.img = img;
    this._cardImg = '/assets/img/' + img + '.png';
  }

  public get cardImg(): string {
    return this._cardImg;
  }

  public img = '';

  private _cardImg = '/assets/img/placeholder.png';
}
