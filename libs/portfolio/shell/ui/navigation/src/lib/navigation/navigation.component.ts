import { ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

//change to chared folder
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  //id's from components to scroll to
  @Input() public singlePageAnchors: Array<string> = ['Home', 'About', 'Work', 'Skills', 'Contact'];
  public readonly navroutes = this.router.config;
  public linkClass = '';

  public constructor(private router: Router, private scroller: ViewportScroller) {}

  public scrollTo(anchor: string): void {
    this.scroller.scrollToAnchor(anchor);
  }
}
