import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';

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
}
