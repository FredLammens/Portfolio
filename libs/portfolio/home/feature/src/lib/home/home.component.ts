import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Anchor } from '@fred/shared/ui';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public anchors = [
    { anchor: 'Home', toggled: false },
    { anchor: 'About', toggled: false },
    { anchor: 'Work', toggled: false },
    { anchor: 'Skills', toggled: false },
    { anchor: 'Contact', toggled: false },
  ];
  public constructor() {}

  public setActiveAnchor(activeAnchor: string) {
    this.anchors = this.anchors.map((mAnchor: Anchor) => {
      if (mAnchor.anchor === activeAnchor) {
        return { anchor: activeAnchor, toggled: true };
      }
      return { ...mAnchor, toggled: false };
    });
  }
}
