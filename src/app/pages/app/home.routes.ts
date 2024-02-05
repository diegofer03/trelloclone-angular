import { Routes } from '@angular/router';

export default [

  {
    path: 'boards',
    title: 'Boards',
    loadComponent: () => import('./boards/boards.component').then(m => m.BoardsComponent)
  },
  {
    path: 'board',
    title: 'Board',
    loadComponent: () => import('./board/board.component').then(m => m.BoardComponent)
  },
  {
    path: 'scroll',
    title: 'Scroll test',
    loadComponent: () => import('./scroll/scroll.component').then(m => m.ScrollComponent)
  },
  {
    path: 'table',
    title: 'table test',
    loadComponent: () => import('./table/table.component').then(m => m.TableComponent)
  },
  {
    path: 'profile',
    title: 'profile',
    loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
  },
] as Routes ;
