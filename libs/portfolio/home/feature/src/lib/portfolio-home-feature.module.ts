import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedUiModule } from '@fred/shared/ui';
import { NgrxentensionsModule } from '@fred/shared/util/common-extensions/ng-rx-extensions';

import { AboutComponent } from './home-components/about/about.component';
import { ContactComponent } from './home-components/contact/contact.component';

import { HeroComponent } from './home-components/hero/hero.component';
import { SkillsComponent } from './home-components/skills/skills.component';
import { TestimonialComponent } from './home-components/testimonial/testimonial.component';
import { WorkComponent } from './home-components/work/work.component';
import { HomeRoutes } from './Home.routing';
import { HomeComponent } from './home/home.component';

const heroComponents = [HeroComponent];
const workComponents = [WorkComponent];
const homeComponents = [
  ...heroComponents,
  AboutComponent,
  ...workComponents,
  SkillsComponent,
  TestimonialComponent,
  ContactComponent,
];

@NgModule({
  declarations: [HomeComponent, ...homeComponents],
  imports: [HomeRoutes, CommonModule, SharedUiModule, NgrxentensionsModule],
  exports: [HomeComponent],
})
export class PortfolioHomeFeatureModule {}
