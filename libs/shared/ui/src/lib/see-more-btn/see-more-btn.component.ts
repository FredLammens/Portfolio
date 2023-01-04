import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
//TODO: change name to something better
@Component({
  selector: 'see-more-btn',
  templateUrl: './see-more-btn.component.html',
  styleUrls: ['./see-more-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeeMoreBtnComponent {
  @Input()
  public btnText = 'see more';

  @Output()
  public showMore: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  public handleClick(): void {
    this.showMore.emit(true);
  }
}
