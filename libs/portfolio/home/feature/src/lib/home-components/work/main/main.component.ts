import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { ImgInfo } from '@fred/shared/ui';

@Component({
  selector: 'work-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  @Input()
  public stackImgs: Array<ImgInfo> = [];
  @Output()
  public showSeeMore = new EventEmitter<boolean>();
}
