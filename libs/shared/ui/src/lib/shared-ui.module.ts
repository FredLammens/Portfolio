import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgrxentensionsModule } from '@fred/shared/util/common-extensions/ng-rx-extensions';

import { CardComponent } from './card/card.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { SharedNavigationComponent } from './shared-navigation/shared-navigation.component';

const components = [
  SharedNavigationComponent,
  CardComponent,
  RadioGroupComponent,
  ProjectCardComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, NgrxentensionsModule],
  declarations: [...components],
  exports: [...components],
})
export class SharedUiModule {}
