import { ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Anchor } from '../models/shared-navigationAnchor.model';

@Component({
  selector: 'navigation',
  templateUrl: './shared-navigation.html',
  styleUrls: ['./shared-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedNavigationComponent {
  private _singlePageAnchors: Array<Anchor> = [];

  @Input()
  public set singlePageAnchors(sAnchors: Array<Anchor>) {
    this._singlePageAnchors = sAnchors;
  }

  public get singlePageAnchors(): Array<Anchor> {
    return this._singlePageAnchors;
  }

  public readonly navroutes = this.router.config;
  public linkClass = '';

  public constructor(private router: Router, private scroller: ViewportScroller) {}

  public scrollTo(anchor: string): void {
    this.scroller.scrollToAnchor(anchor);
  }
}
