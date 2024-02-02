import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Board, Card } from '../models/app.models';
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

  getPosition(cards: Card[], currentIndex: number){
    //new
    if(cards.length === 1){
      return 'new card'
    }
    //top
    if(cards.length > 1 && currentIndex === 0){
      return 'top card'
    }
    const lastIndex = cards.length - 1
    //middle
    if(cards.length > 2 && currentIndex > 0 && currentIndex < lastIndex){
      return 'middle card'
    }
    //bottom
    if(cards.length > 1 && currentIndex === lastIndex ){
      return 'bottom card'
    }
    return 0
  }
}
