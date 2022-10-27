import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Anchor } from '@fred/shared/ui';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public anchors: Array<Anchor> = [
    { anchor: 'Home', toggled: false },
    { anchor: 'About', toggled: false },
    { anchor: 'Work', toggled: false },
    { anchor: 'Skills', toggled: false },
    { anchor: 'Contact', toggled: false },
  ];
  public constructor() {}

  public setActiveAnchor(anchorState: { elementId: string; isIntersecting: boolean }) {
    this.anchors = this.anchors.map((mAnchor: Anchor) => {
      if (mAnchor.anchor === anchorState.elementId) {
        return { anchor: anchorState.elementId, toggled: anchorState.isIntersecting };
      }
      return { ...mAnchor, toggled: false };
    });
  }
}
