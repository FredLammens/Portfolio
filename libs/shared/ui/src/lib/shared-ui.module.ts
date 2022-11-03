import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgrxentensionsModule } from '@fred/shared/util/common-extensions/ng-rx-extensions';

import { BoardComponent } from './board/board.component';

import { ProjectCardComponent } from './board/project-card/project-card.component';
import { CardComponent } from './card/card.component';
import { ChipsComponent } from './chips/chips.component';
import { IconComponent } from './iconGroup/icon/icon.component';
import { IconGroupComponent } from './iconGroup/iconGroup.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { SharedNavigationComponent } from './shared-navigation/shared-navigation.component';
import { TimelineComponent } from './timeline/timeline.component';

const kanban = [BoardComponent, ProjectCardComponent];
const iconGroup = [IconGroupComponent, IconComponent];
const components = [
  SharedNavigationComponent,
  CardComponent,
  RadioGroupComponent,
  ...kanban,
  ChipsComponent,
  ...iconGroup,
  TimelineComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, NgrxentensionsModule],
  declarations: [...components],
  exports: [...components],
})
export class SharedUiModule {}
