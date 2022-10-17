import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutes } from './Home.routing';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutes],
  exports: [HomeComponent],
})
export class PortfolioHomeFeatureModule {}
