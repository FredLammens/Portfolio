import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgrxentensionsModule } from '@fred/shared/util/common-extensions/ng-rx-extensions';

import { BoardComponent } from './board/board.component';

import { ProjectCardComponent } from './board/project-card/project-card.component';
import { CardComponent } from './card/card.component';
import { ChipsComponent } from './chips/chips.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SubmitBtnComponent } from './contact-form/submit-btn/submit-btn.component';
import { IconComponent } from './iconGroup/icon/icon.component';
import { IconGroupComponent } from './iconGroup/iconGroup.component';
import { PolaroidCardComponent } from './project-stack/polaroid-card/polaroid-card.component';
import { ProjectStackComponent } from './project-stack/project-stack.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { SeeMoreBtnComponent } from './see-more-btn/see-more-btn.component';
import { SharedNavigationComponent } from './shared-navigation/shared-navigation.component';
import { DateRowComponent } from './timeline/date-row/date-row.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip/tooltip.directive';

const kanban = [BoardComponent, ProjectCardComponent];
const iconGroup = [IconGroupComponent, IconComponent];
const timeline = [TimelineComponent, DateRowComponent];
const tooltip = [TooltipDirective, TooltipComponent];
const projectStack = [ProjectStackComponent, PolaroidCardComponent];
const contactForm = [ContactFormComponent, SubmitBtnComponent];
const components = [
  SharedNavigationComponent,
  CardComponent,
  RadioGroupComponent,
  ...kanban,
  ChipsComponent,
  ...iconGroup,
  ...timeline,
  ...tooltip,
  ...projectStack,
  SeeMoreBtnComponent,
  ...contactForm,
];

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NgrxentensionsModule],
  declarations: [...components],
  exports: [...components],
})
export class SharedUiModule {}
