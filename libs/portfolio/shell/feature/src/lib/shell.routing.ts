import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
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
