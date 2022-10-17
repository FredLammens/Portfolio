import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PortfolioShellModule } from '@fred/portfolio/shell/feature';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, PortfolioShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
