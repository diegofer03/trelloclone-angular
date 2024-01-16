import { Routes } from '@angular/router';
import LoginComponent from './pages/auth/login/login.component';
import { TableComponent } from './pages/table/table.component';
import AuthComponent from './pages/auth/auth.component';

export const routes: Routes = [
  // Redirect empty path to '/example'
  {path: '', pathMatch : 'full', redirectTo: ''},
  {
    path: '',
    component: AuthComponent,
    children: [
      {path: '', loadChildren: () => import('./pages/auth/auth.routes')},
    ]
  },
  {
    path: 'boards',
    title: 'Boards',
    loadComponent: () => import('./pages/boards/boards.component').then(m => m.BoardsComponent)
  },
  {
    path: 'board',
    title: 'Board',
    loadComponent: () => import('./pages/board/board.component').then(m => m.BoardComponent)
  },
  {
    path: 'scroll',
    title: 'Scroll test',
    loadComponent: () => import('./pages/scroll/scroll.component').then(m => m.ScrollComponent)
  },
  {
    path: 'table',
    title: 'table test',
    loadComponent: () => import('./pages/table/table.component').then(m => m.TableComponent)
  },
  {
    path: '**',
    redirectTo: ''
  },
];
