import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ImgInfo, Project, State, TechStack } from '@fred/shared/ui';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkComponent implements OnInit {
  public stackImgs: Array<ImgInfo> = [];
  // later inside service
  public projects: Array<Project> = [
    {
      tags: ['Web', 'Mobile'],
      tech: [TechStack.Angular, TechStack.NxWorkspace],
      githubLink: '',
      webisteLink: 'https://frederic-lammens.netlify.app/home',
      title: 'Portfolio',
      description: 'A small website showcasing my curriculum vitae in a fun responsive web format',
      state: State.Backlog,
      img: 'portfolio',
      imgSrc: 'assets/img/portfolio.png',
      date: new Date(),
    },
    {
      tags: ['Web'],
      tech: [TechStack.Angular, TechStack.NxWorkspace],
      githubLink: '',
      webisteLink: 'https://frederic-lammens.netlify.app/home',
      title: 'Portfolio',
      description: 'A small website showcasing my curriculum vitae in a fun responsive web format',
      state: State.InProgess,
      img: 'portfolio',
      imgSrc: 'assets/img/portfolio.png',
      date: new Date(),
    },
    {
      tags: ['Mobile'],
      tech: [TechStack.Angular, TechStack.NxWorkspace],
      githubLink: '',
      webisteLink: 'https://frederic-lammens.netlify.app/home',
      title: 'Portfolio',
      description: 'A small website showcasing my curriculum vitae in a fun responsive web format',
      state: State.Done,
      img: 'PlaceHolder',
      imgSrc: 'assets/img/portfolio.png',
      date: new Date(),
    },
  ];
  public ngOnInit(): void {
    this.projects.forEach((p) => {
      const pImgInfo = {
        src: p.imgSrc,
        alt: p.img,
      };
      this.stackImgs.push(pImgInfo);
    });
  }
}
