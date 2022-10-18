import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { PortfolioShellModule } from '@fred/portfolio/shell/feature';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, PortfolioShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
