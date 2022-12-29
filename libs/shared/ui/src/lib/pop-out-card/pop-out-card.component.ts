import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'pop-out-card',
  templateUrl: './pop-out-card.component.html',
  styleUrls: ['./pop-out-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopOutCardComponent {
  //TUTORIAL FROM KEVIN POWEL
  //https://youtu.be/1zDRqHifoX0?list=PLeoiQA97PxNQGFbK6FUUod_3eNzwXPKUS
  @Input() public backgroundImg = 'assets/img/pop-out/bg-pattern1.jpg';
  @Input() public personImg = 'assets/img/pop-out/person1.png';
  constructor() {}
}
