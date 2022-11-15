import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

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
  public isClicked = new EventEmitter<boolean>();
  constructor() {}
}
