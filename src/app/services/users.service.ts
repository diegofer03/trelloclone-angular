import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../enviroments/enviroment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient)
  private apiUrl = enviroment.API_URL
  loading$ = new BehaviorSubject<boolean>(false)
  constructor() { }

  getUSer(){
    return this.http.get(`${this.apiUrl}api/v1/users`)
  }
}
