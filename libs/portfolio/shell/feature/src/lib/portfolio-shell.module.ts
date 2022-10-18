import { NgModule } from '@angular/core';
import { NavigationModule } from '@fred/portfolio/shell/ui/navigation';

import { ShellRoutes } from './shell.routing';

@NgModule({
  imports: [ShellRoutes, NavigationModule],
})
export class PortfolioShellModule {}
