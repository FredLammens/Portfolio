import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  public anchors = ['Home', 'About', 'Work', 'Skills', 'Contact'];
}
