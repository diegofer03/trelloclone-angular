import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { todo } from '../../models/app.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NavbarComponent, DragDropModule, CdkDropList, CdkDrag, CommonModule, CdkDropListGroup],
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

  todos: todo[] = [
    {
      id: '1',
      title: 'Make dishes'
    },
    {
      id: '2',
      title: 'Buy a unicorn'
    },
    {
      id: '3',
      title: 'Watch Angular Path in Platzi'
    }
  ];

  doing = [{id: '1', title:'Get to work'}, {id: '2', title:'Pick up groceries'}];

  done = [{id: '1', title:'Get up'}, {id: '2', title:'Brush teeth'}, {id: '3', title:'Take a shower'}];


  drop(event: CdkDragDrop<any[]>) {
    if(event.container === event.previousContainer) moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
    else{
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }
  }
}
