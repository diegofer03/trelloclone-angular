import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient)
  private apiUrl = enviroment.API_URL
  constructor() { }

  getUSer(){
    return this.http.get(`${this.apiUrl}api/v1/users`)
  }
}
