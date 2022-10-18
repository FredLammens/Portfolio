import { NavigationComponent } from './../../../ui/navigation/src/lib/navigation/navigation.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//layoutcomponent add ui folder with lib and put it underneath path with component:navigationComponent,
const routes: Routes = [
  {
    path: 'home',
    component: NavigationComponent,
    title: 'Home',
    loadChildren: () =>
      import('@fred/portfolio/home/feature').then((m) => m.PortfolioHomeFeatureModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

export const ShellRoutes = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });
