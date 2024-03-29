import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  //logo's from https://logospng.org/d/?l=aHR0cHM6Ly9sb2dvc3BuZy5vcmcvZG93bmxvYWQvaHRtbC01L2xvZ28taHRtbC01LTI1Ni5wbmc= [all 256]
  public icons = [
    { name: 'Typescript', logoUrl: 'assets/img/skill-icons/typescript.png', color: '#AEBCE3' },
    { name: 'HTML5', logoUrl: 'assets/img/skill-icons/html.png', color: 'black' },
    { name: 'Sass', logoUrl: 'assets/img/skill-icons/sass.png', color: '#35405D' },
    { name: 'CSS3', logoUrl: 'assets/img/skill-icons/css.png', color: '#8F9DC1' },
    { name: 'Javascript', logoUrl: 'assets/img/skill-icons/JS.png', color: 'black' },
    { name: 'C#', logoUrl: 'assets/img/skill-icons/c-sharp.png', color: '#82CF6F' },
    { name: 'Node JS', logoUrl: 'assets/img/skill-icons/nodejs.png', color: 'white' },
    { name: 'Angular', logoUrl: 'assets/img/angular.png', color: 'white' },
    { name: 'Git', logoUrl: 'assets/img/skill-icons/git.png', color: '#E7CD9C' },
  ];

  public jobs = [
    {
      year: '2021',
      jobInfo: [
        {
          Title: 'Analyst Developer',
          Company: 'CTG-Bridgestone',
          description:
            'The system consists out of 2 web portals, a CRM component, a mobile app and heavy integration of high volumes of data with the Bridgestone back-end (SAP) and other external systems through Azure cloud architecture. ',
          companyDescription:
            'Bridgestone is one of the leading tyre manufacturers in the world. Fleetbridge is their tyre and fleet management system, with worksheet and serving functionalities used by fleets and dealers in the European dealer network.',
          tasks: [
            'Monitoring services health',
            'Costumer first-line support',
            'Resolving issues on front-end side',
            'Developing new features',
          ],
          keywords: [
            'Support',
            'Development C# - .NET Core',
            'Angular',
            'SQL',
            'Agile/Scrum',
            'Azure DevOps',
            'Visual Studio',
            'Visual Studio Code',
            'SSMS',
            'Postman',
          ],
        },
        {
          Title: 'Analyst Developer',
          Company: 'Innovatus B.V.',
          description:
            'Kickstarting the creation of a online job platform exclusively for angular-related jobs.',
          companyDescription:
            "Innovatus partner with Europe's most ambitious innovators to create unique opportunities and extraordinary experiences within the Angular community. Innovatus has a job managing platform to aid Angular developers finding new opportunities. For managing this platform was a website/database created using Angular and Firebase.",
          tasks: [
            'Setting up the project',
            'Setup NoSql database',
            'Adding security rules to database',
            'Practicing in daily stand-ups',
            'Setup Cloud functions',
          ],
          keywords: [
            'Development',
            'Angular',
            'Typescript',
            'Rxjs',
            'Agile/Scrum',
            'VisualStudioCode',
            'Github actions',
            'Atlassian Jira',
            'NxWorkspace',
          ],
        },
      ],
    },
  ];
  constructor() {}
}
