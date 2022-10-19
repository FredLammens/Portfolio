import { ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Anchor } from './shared-navigationAnchor.model';

@Component({
  selector: 'navigation',
  templateUrl: './shared-navigation.html',
  styleUrls: ['./shared-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedNavigationComponent {
  public _singPageAnchors: Array<Anchor> = [];

  @Input()
  public set singlePageAnchors(anchors: Array<string>) {
    this._singPageAnchors = anchors.map((anchor: string) => ({ anchor, toggled: false }));
  }

  public readonly navroutes = this.router.config;
  public linkClass = '';

  public constructor(private router: Router, private scroller: ViewportScroller) {
    this.singlePageAnchors = ['Home', 'About', 'Work', 'Skills', 'Contact'];
  }

  private setAnchorToggled(anchor: string): void {
    this._singPageAnchors = this._singPageAnchors.map((mAnchor: Anchor) => {
      if (mAnchor.anchor === anchor) {
        return { anchor, toggled: true };
      }
      return { ...mAnchor, toggled: false };
    });
  }

  public scrollTo(anchor: string): void {
    this.setAnchorToggled(anchor);
    this.scroller.scrollToAnchor(anchor);
  }
}
