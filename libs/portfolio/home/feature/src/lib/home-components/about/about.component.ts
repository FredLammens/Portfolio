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
      img: 'webDesigner',
      title: 'Web Designer',
      description:
        'I am a web designer with a passion for creating beatifull and functional web applications.',
    },
    {
      img: 'angular',
      title: 'Angular Developer',
      description:
        "I'm a Angular developer with a passion for building beatiful and functional mobile applications.",
    },
    {
      img: 'frontEnd',
      title: 'Frontend Developer',
      description:
        'Im a frontend developer with a passion for building beatiful and functional web applicaitons ',
    },
  ];
}
