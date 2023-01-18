import { ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  public info = {
    name: 'Frederic Lammens',
    functionTitle: 'developer',
    topTitle: 'Hello! world',
  };

  public constructor(private scroller: ViewportScroller) {}

  public scrollTo(anchor: string): void {
    this.scroller.scrollToAnchor(anchor);
  }
}
