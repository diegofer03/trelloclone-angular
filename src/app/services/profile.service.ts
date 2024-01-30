import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';
import { Board, User } from '../models/app.models';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http = inject(HttpClient)
  apiUrl = enviroment.API_URL

  constructor() { }

  getProfile(){
    return this.http.get<User>(`${this.apiUrl}api/v1/me/profile`)
  }

  getBoards(){
    return this.http.get<Board[]>(`${this.apiUrl}api/v1/me/boards`)
  }

  getOneBoard(){

  }
}
