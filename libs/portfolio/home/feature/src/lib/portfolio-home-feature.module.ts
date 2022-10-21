import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThreeDeeObjectComponent } from './hero/3Dobject/3Dobject.component';

import { HeroComponent } from './hero/hero.component';

import { HomeRoutes } from './Home.routing';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent, HeroComponent, ThreeDeeObjectComponent],
  imports: [CommonModule, HomeRoutes],
  exports: [HomeComponent],
})
export class PortfolioHomeFeatureModule {}
