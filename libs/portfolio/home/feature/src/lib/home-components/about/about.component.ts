import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Card } from '@fred/shared/ui';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  //(img.png in assets/img)
  public cards: Array<Card> = [
    {
      img: 'avatar',
      title: 'About me',
      description:
        'I am a open, calm and highly-motivated to bring a project to completion with a focus on quality and customer priorities.',
    },
    {
      img: 'frontend',
      title: 'Frontend Developer',
      description:
        'I am a Frontend developer with a passion for building beatiful and functional web applicaitons ',
    },
    {
      img: 'angular',
      title: 'Angular Framework',
      description:
        'I have multiple work experiences in the Angular framework. Including application support services and creating management systems.',
    },
  ];
}
