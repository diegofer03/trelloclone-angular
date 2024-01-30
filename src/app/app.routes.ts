import { Routes } from '@angular/router';
import LoginComponent from './pages/auth/login/login.component';
import { TableComponent } from './pages/app/table/table.component';
import AuthComponent from './pages/auth/auth.component';
import { HomeComponent } from './pages/app/home.component';
import { tokenGuard } from './guards/token.guard';
import { redirectsGuard } from './guards/redirects.guard';

export const routes: Routes = [
  // Redirect empty path to '/example'
  {path: '', pathMatch : 'full', redirectTo: 'login'},
  {
    path: '',
    canActivate: [redirectsGuard],
    component: AuthComponent,
    children: [
      {path: '', loadChildren: () => import('./pages/auth/auth.routes')},
    ]
  },
  {
    path: 'home',
    canActivate: [tokenGuard],
    component: HomeComponent,
    children: [
      {path: '', loadChildren: () => import('./pages/app/home.routes')},
    ]
  },

  {
    path: '**',
    redirectTo: ''
  },
];
