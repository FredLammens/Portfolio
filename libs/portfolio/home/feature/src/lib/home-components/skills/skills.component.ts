import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  public icons = [
    { name: 'Typescript', logoUrl: 'assets/img/placeholder.png', color: 'green' },
    { name: 'HTML5', logoUrl: 'assets/img/placeholder.png', color: 'blue' },
    { name: 'Sass', logoUrl: 'assets/img/placeholder.png' },
    { name: 'CSS3', logoUrl: 'assets/img/placeholder.png' },
    { name: 'Javascript', logoUrl: 'assets/img/placeholder.png' },
    { name: 'C#', logoUrl: 'assets/img/placeholder.png' },
    { name: 'Node JS', logoUrl: 'assets/img/placeholder.png' },
    { name: 'Angular', logoUrl: 'assets/img/placeholder.png' },
    { name: 'Git', logoUrl: 'assets/img/placeholder.png' },
  ];

  public jobs = [
    {
      year: '2022',
      jobInfo: [
        {
          Title: 'Analyst Developer',
          Company: 'CTG',
        },
      ],
    },
  ];
  constructor() {}
}
