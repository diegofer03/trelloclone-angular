import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Board } from '../models/app.models';
import { enviroment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {
  private http = inject(HttpClient)
  private apiUrl = enviroment.API_URL

  constructor() { }

  getBoard(id : Board['id']){
    return this.http.get(`${this.apiUrl}api/v1/boards/${id}`)
  }
}
