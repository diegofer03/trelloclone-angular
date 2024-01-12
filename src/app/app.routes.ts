import { Routes } from '@angular/router';
import LoginComponent from './pages/login/login.component';
import { TableComponent } from './pages/table/table.component';

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
  }
];
