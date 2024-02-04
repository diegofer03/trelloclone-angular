import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';
import { Card, CardCreate, UpdateCardDto } from '../models/app.models';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private http = inject(HttpClient)
  private apiUrl = enviroment.API_URL

  constructor() { }

  updateCard(id : Card['id'], changes : UpdateCardDto){
    return this.http.put(`${this.apiUrl}api/v1/cards/${id}`, changes)
  }

  createCard(card: CardCreate){
    return this.http.post(`${this.apiUrl}api/v1/cards`, card)
  }
}
