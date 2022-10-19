import { ChangeDetectionStrategy, Component } from '@angular/core';

//TODO: change to shared folder
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  public anchors = ['Home', 'About', 'Work', 'Skills', 'Contact'];
}
