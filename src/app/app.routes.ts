import { Routes } from '@angular/router';
import LoginComponent from './pages/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    title: 'Log in to Trello',
    component: LoginComponent
  }
];
