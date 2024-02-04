import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import {CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board, Card, ColorCard, column, todo } from '../../../models/app.models';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {Dialog, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
import { DialogComponent } from '../../../components/dialog/dialog.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BoardsService } from '../../../services/boards.service';
import { CardService } from '../../../services/card.service';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NavbarComponent, DragDropModule, DialogModule, CdkDropList, CdkDrag, CommonModule,
    CdkDropListGroup, ReactiveFormsModule, RouterLink],
  templateUrl: './board.component.html',
  styles: [
    `
    .cdk-drag-preview {
      box-sizing: border-box;
      border-radius: 4px;
      box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                  0 8px 10px 1px rgba(0, 0, 0, 0.14),
                  0 3px 14px 2px rgba(0, 0, 0, 0.12);
    }

    .cdk-drag-placeholder {
      opacity: 0;
    }

    .cdk-drag-animating {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    .example-box:last-child {
      border: none;
    }

    .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }
    `
  ]
})
export class BoardComponent {
  dialog = inject(Dialog)
  route = inject(ActivatedRoute)
  router = inject(Router)
  boardsService = inject(BoardsService)
  cardService = inject(CardService)

  newColumn = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
    ]
  })

  board : Board | null = null

  mapColors = {
    home: '',
    sky: 'bg-sky-600',
    yellow: 'bg-yellow-600',
    green: 'bg-green-600',
    red: 'bg-red-600',
    violet: 'bg-violet-600',
    gray: 'bg-gray-600',
  }

  get colorBg(){
    const color: ColorCard = (this.board?.backgroundColor != null ? this.board?.backgroundColor as ColorCard : 'home')
    const classes = this.mapColors[color]
    return classes ? classes : {};
  }

  ngOnInit(){
    this.route.queryParamMap.subscribe((params:any)=>{
      if(params.params.id) this.getBoardData(params.params.id)
      else this.router.navigate(['/home/boards'])
    })
  }

  addColumn(){
    // if(this.newColumn.valid){
    //   this.columns.push({
    //     title: this.newColumn.value,
    //     todo: []
    //   })
    //   this.newColumn.setValue('')
    // }
  }

  drop(event: CdkDragDrop<Card[]>) {

    if(event.container === event.previousContainer) moveItemInArray(event.container.data,
      event.previousIndex, event.currentIndex);
    else{
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex,
        event.currentIndex)
    }
    const card = event.container.data[event.currentIndex]
    const position = this.boardsService.getPosition(event.container.data, event.currentIndex)
    const listId = event.container.id;
    this.updateBoardData(card, position, listId);
  }

  openDialog(card: Card, list: string) {
    const ref = this.dialog.open(DialogComponent, {
      minWidth: '300px',
      maxWidth : '50%',
      data: {
        card: card,
        list: list
      }
    });
    ref.closed.subscribe(data => {
    })
  }

  ngOnDestroy(){
    this.boardsService.resetColor()
  }

  private getBoardData(id : Board['id']){
    this.boardsService.getBoard(id).subscribe({
      next: (data: any) => {
        this.board = data
      },
      error: error => {
        console.log(error)
      }
    })
  }

  private updateBoardData(card: Card, position: number, listId: string | number){
    this.cardService.getBoard(card.id, {position, listId}).subscribe({
      next: data => {
      },
      error: error => {
        console.log(error)
      }
    })
  }
}
