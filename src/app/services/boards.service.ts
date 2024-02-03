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
  private bufferSpace = 65535

  constructor() { }

  getBoard(id : Board['id']){
    return this.http.get(`${this.apiUrl}api/v1/boards/${id}`)
  }

  getPosition(cards: Card[], currentIndex: number){
    //new
    if(cards.length === 1){
      return this.bufferSpace
    }
    //top
    if(cards.length > 1 && currentIndex === 0){
      return cards[1].position / 2
    }
    const lastIndex = cards.length - 1
    //middle
    if(cards.length > 2 && currentIndex > 0 && currentIndex < lastIndex){
      const prevPosition = cards[currentIndex - 1].position
      const nextPosition = cards[currentIndex + 1].position
      return (prevPosition + nextPosition) / 2
    }
    //bottom
    if(cards.length > 1 && currentIndex === lastIndex ){
      const bottomPosition = cards[lastIndex - 1].position
      return bottomPosition + this.bufferSpace
    }
    return 0
  }
}
