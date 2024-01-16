import { Routes } from '@angular/router';

export default [
  {
    path: 'login',
    loadComponent: () => import('./login/login.component'),
    title: 'Log in Trello'
  },
  {
    path: 'signup',
    loadComponent: () => import('./sign-up/sign-up.component').then(m => m.SignupComponent),
    title: 'Sign up in Trello'
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent),
    title: 'Recuperar clave'
  },
  {
    path: 'recovery',
    loadComponent: () => import('./recovery/recovery.component').then(m => m.RecoveryComponent),
    title: 'Recuperar'
  }
] as Routes ;
