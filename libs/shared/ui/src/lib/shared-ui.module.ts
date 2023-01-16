import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgrxentensionsModule } from '@fred/shared/util/common-extensions/ng-rx-extensions';

import {
  ptIconsExpandOutline,
  PtIconsRegistryService,
  SharedUtilIconsModule,
} from '@fred/shared/util/icons';

import { BoardComponent } from './board/board.component';

import { ProjectCardComponent } from './board/project-card/project-card.component';
import { CardComponent } from './card/card.component';
import { ChipsComponent } from './chips/chips.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SubmitBtnComponent } from './contact-form/submit-btn/submit-btn.component';
import { IconComponent } from './iconGroup/icon/icon.component';
import { IconGroupComponent } from './iconGroup/iconGroup.component';
import { PopOutCardComponent } from './pop-out-card/pop-out-card.component';
import { PolaroidCardComponent } from './project-stack/polaroid-card/polaroid-card.component';
import { ProjectStackComponent } from './project-stack/project-stack.component';
import { AndroidFrameComponent } from './project-work-card/android-frame/android-frame.component';
import { DesktopFrameComponent } from './project-work-card/desktop-frame/desktop-frame.component';
import { IOSFrameComponent } from './project-work-card/iOS-frame/iOS-frame.component';
import { ProjectWorkCardComponent } from './project-work-card/project-work-card.component';
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
const projectWorkCard = [
  ProjectWorkCardComponent,
  AndroidFrameComponent,
  DesktopFrameComponent,
  IOSFrameComponent,
];
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
  PopOutCardComponent,
  ...projectWorkCard,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgrxentensionsModule,
    SharedUtilIconsModule,
  ],
  declarations: [...components],
  exports: [...components],
})
export class SharedUiModule {
  constructor(private ptIconsRegistryService: PtIconsRegistryService) {
    this.ptIconsRegistryService.registerIcons([ptIconsExpandOutline]);
  }
}
