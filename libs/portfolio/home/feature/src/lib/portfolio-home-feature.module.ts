import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroComponent } from './hero/hero.component';

import { HomeRoutes } from './Home.routing';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent, HeroComponent],
  imports: [CommonModule, HomeRoutes],
  exports: [HomeComponent],
})
export class PortfolioHomeFeatureModule {}
