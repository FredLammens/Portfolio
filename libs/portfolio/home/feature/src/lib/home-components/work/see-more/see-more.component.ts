import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Project, radioGroup } from '@fred/shared/ui';

@Component({
  selector: 'work-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeeMoreComponent implements OnInit {
  public projectsFiltered: Array<Project> = [];

  // later inside service
  @Input()
  public projects: Array<Project> = [];

  public radioGroups: Array<radioGroup> = [
    { name: 'ALL', emoji: '' },
    { name: 'Web', emoji: '💻' },
    { name: 'Mobile', emoji: '📱' },
  ];

  public ngOnInit(): void {
    this.selectedGroup('ALL');
  }

  public selectedGroup(tag: string): void {
    if (tag === 'ALL') {
      this.projectsFiltered = this.projects;
      return;
    }
    this.projectsFiltered = this.projects.filter((v) => v.tags.includes(tag));
  }
}
