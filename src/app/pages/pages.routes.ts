import { Routes } from '@angular/router';

export default [
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.component'),
    title: 'Log in Trello'
  }
] as Routes ;
