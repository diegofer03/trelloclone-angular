import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Board, Card, ColorCard } from '../models/app.models';
import { enviroment } from '../../enviroments/enviroment';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {
  private http = inject(HttpClient)
  private apiUrl = enviroment.API_URL
  private bufferSpace = 65535
  color$ = new BehaviorSubject<ColorCard | null>(null)

  constructor() { }

  getBoard(id : Board['id']){
    return this.http.get<Board>(`${this.apiUrl}api/v1/boards/${id}`).pipe(
      tap((response) => {
        this.color$.next(response.backgroundColor)
      })
      )
  }

  createBoard(title: string, backgroundColor: ColorCard){
    return this.http.post<Board>(`${this.apiUrl}api/v1/boards/`,{
      title,
      backgroundColor
    })
  }

  resetColor(){
    this.color$.next(null)
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
