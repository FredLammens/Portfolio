import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() public cardTitle = '';
  @Input() public cardDescription = '';

  @Input()
  public set cardImg(img: string) {
    this.img = img;
    this._cardImg = '/assets/img/' + img + '.png';
  }

  public get cardImg(): string {
    return this._cardImg;
  }

  public img = '';

  private _cardImg = '';
}
