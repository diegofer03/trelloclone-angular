import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';
import { List, ListCreate } from '../models/app.models';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  private http = inject(HttpClient)
  private apiUrl = enviroment.API_URL

  constructor() { }

  createBoard(list: ListCreate){
    return this.http.post<List>(`${this.apiUrl}api/v1/lists`,
      list
    )
  }
}
