import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { column, todo } from '../../models/app.models';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {Dialog, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NavbarComponent, DragDropModule, DialogModule, CdkDropList, CdkDrag, CommonModule, CdkDropListGroup, ReactiveFormsModule],
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

  newColumn = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
    ]
  })

  columns : column[] = [
    {
      title: 'todos',
      todo: [
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
      ]
    },
    {
      title: 'doing',
      todo: [
        {
          id: '1', title:'Get to work'
        },
        {
          id: '2', title:'Pick up groceries'
        }
      ]
    },
    {
      title: 'done',
      todo: [
        {
          id: '1', title:'Get up'
        },
        {
          id: '2', title:'Brush teeth'
        },
        {
          id: '3', title:'Take a shower'
        }
      ]
    },
  ]

  addColumn(){
    if(this.newColumn.valid){
      this.columns.push({
        title: this.newColumn.value,
        todo: []
      })
      this.newColumn.setValue('')
    }
  }

  drop(event: CdkDragDrop<any[]>) {
    if(event.container === event.previousContainer) moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    else{
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }
  }

  openDialog(todo: todo) {
    const ref = this.dialog.open(DialogComponent, {
      minWidth: '300px',
      maxWidth : '50%',
      data: {
        todo: todo
      }
    });
    ref.closed.subscribe(data => {
      console.log(data)
    })
  }
}
