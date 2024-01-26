import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  http = inject(HttpClient)
  apiUrl = enviroment.API_URL
  constructor() { }

  login(token: string){
    return this.http.get(`${this.apiUrl}api/v1/auth/login`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}
