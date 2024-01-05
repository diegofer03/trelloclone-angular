import { Routes } from '@angular/router';
import LoginComponent from './pages/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    title: 'Log in to Trello',
    loadComponent: () => import('./pages/login/login.component')
  },
  {
    path: 'boards',
    title: 'Boards',
    loadComponent: () => import('./pages/boards/boards.component').then(m => m.BoardsComponent)
  }
];
