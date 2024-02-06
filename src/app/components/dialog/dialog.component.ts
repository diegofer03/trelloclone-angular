import { Component, Inject, inject } from '@angular/core';
import {DIALOG_DATA, DialogRef} from '@angular/cdk/dialog';
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from '../button/button.component';
import { Card, todo } from '../../models/app.models';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardService } from '../../services/card.service';

interface InputData {
  card: Card;
  list: string
}

interface OutputData {
  rta: boolean;
}

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [FontAwesomeModule, ButtonComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
  cardService = inject(CardService)
  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faPlus = faPlus
  faCheckSquare = faCheckSquare;
  faClock = faClock;
  card: Card
  listTitle: string
  dialogRef = inject(DialogRef<OutputData>)

  editableTask = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern('^(?!\s*$).+')
    ]
  })

  editableDesc = new FormControl('', {
    nonNullable: true,
    validators: [
    ]
  })

  editingDesc = false
  editingTitle = false

  constructor(@Inject(DIALOG_DATA) data: InputData){
    this.card = data.card
    this.listTitle = data.list
  }

  editingTl(){
    this.editableTask.setValue(this.card.title)
    this.editingTitle = true
  }

  editingDc(){
    this.editableDesc.setValue(this.card.description ? this.card.description : '')
    this.editingDesc = true
  }

  editTl(){
    const title = this.editableTask.getRawValue()
    this.card.title = title
    this.editingTitle = false
    this.cardService.updateCard(this.card.id, {title}).subscribe({
      next: data => {

      },
      error: error => {
        this.editingTitle = false
      }
    })
  }

  editDc(){
    const description = this.editableDesc.getRawValue()
    this.card.description = description
    this.editingDesc = false
    this.cardService.updateCard(this.card.id, {description}).subscribe({
      next: data => {

      },
      error: error => {
        this.editingDesc = false
      }
    })
  }

  close() {
    this.dialogRef.close();
  }

  closeWithRta(rta: boolean) {
    this.dialogRef.close({ rta });
  }
}
