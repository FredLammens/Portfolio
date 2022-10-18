import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutes } from './Home.routing';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutes],
  exports: [HomeComponent],
})
export class PortfolioHomeFeatureModule {}
