import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient)
  apiUrl = enviroment.API_URL
  constructor() { }

  login(email: string, pass: string){
    return this.http.post(`${this.apiUrl}api/v1/auth/login`, {
      email,
      pass
    });
  }

  register(email: string, name: string, password: string){
    return this.http.post(`${this.apiUrl}api/v1/auth/register`, {
      email,
      password,
      name
    });
  }

  registerAndLogin(email: string, name: string, password: string) {
    return this.register(email, name, password)
    .pipe(
      switchMap(() => this.login(email, password))
    );
  }

  isAvailable(email: string){
    return this.http.post(`${this.apiUrl}api/v1/auth/is-available`, {
      email
    });
  }

  recovery(email: string){
    return this.http.post(`${this.apiUrl}api/v1/auth/recovery`, {
      email
    });
  }
}
