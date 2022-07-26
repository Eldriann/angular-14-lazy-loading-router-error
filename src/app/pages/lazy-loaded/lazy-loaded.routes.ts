import { Routes } from '@angular/router';
import { NeverDisplayedComponent } from './components/never-displayed/never-displayed.component';
import { StatusRedirectGuard } from './guards/status-redirect.guard';
import { LazyLoadedComponent } from './lazy-loaded.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'status-valid',
        component: LazyLoadedComponent,
        canActivate: [StatusRedirectGuard],
      },
      // In angular 13 this syntax worked but now the second syntax is required.
      {
        path: '',
        pathMatch: 'full',
        canActivate: [StatusRedirectGuard],
      },
      // Comment the path above and uncomment that one to have the application working again.
      /*
      {
        path: '',
        pathMatch: 'full',
        canActivate: [StatusRedirectGuard],
        component: NeverDisplayedComponent,
      },
      //*/
    ],
  },
];
