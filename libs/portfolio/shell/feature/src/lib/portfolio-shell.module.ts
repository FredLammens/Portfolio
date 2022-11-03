import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from '@fred/portfolio/shell/ui/navigation';

import { ShellRoutes } from './shell.routing';

@NgModule({
  imports: [ShellRoutes, NavigationModule, BrowserAnimationsModule],
})
export class PortfolioShellModule {}
