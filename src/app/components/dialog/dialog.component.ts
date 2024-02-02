import { Component, Inject, inject } from '@angular/core';
import {DIALOG_DATA, DialogRef} from '@angular/cdk/dialog';
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from '../button/button.component';
import { Card, todo } from '../../models/app.models';

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
  imports: [FontAwesomeModule, ButtonComponent],
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;
  card: Card
  listTitle: string
  dialogRef = inject(DialogRef<OutputData>)

  constructor(@Inject(DIALOG_DATA) data: InputData){
    this.card = data.card
    this.listTitle = data.list
  }

  close() {
    this.dialogRef.close();
  }

  closeWithRta(rta: boolean) {
    this.dialogRef.close({ rta });
  }
}
