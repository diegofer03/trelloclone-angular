import { Component, EventEmitter, Output, effect, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs';
import { ColorCard } from '../../models/app.models';
import { CommonModule } from '@angular/common';
import { BoardsService } from '../../services/boards.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-board',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, FontAwesomeModule, CommonModule],
  templateUrl: './create-board.component.html'
})
export class CreateBoardComponent {
  formBuilder = inject(FormBuilder)
  boardService = inject(BoardsService)
  router = inject(Router)
  faCheck = faCheck

  @Output() closeOverlay = new EventEmitter<boolean>()

  createForm = this.formBuilder.nonNullable.group({
    backgroundColor: new FormControl<ColorCard>('home', {
      validators: [Validators.required],
      nonNullable: true
    }),
    title: ['', Validators.required]
  })

  mapColors = {
    home: '',
    sky: 'bg-sky-700',
    yellow: 'bg-yellow-700',
    green: 'bg-green-700',
    red: 'bg-red-700',
    violet: 'bg-violet-700',
    gray: 'bg-gray-700',
  }

  get colorCard(){
    const {backgroundColor} = this.createForm.getRawValue()
    const color: ColorCard = (backgroundColor != null ? backgroundColor as ColorCard : 'sky')
    const classes = this.mapColors[color]
    return classes ? classes : {};
  }

  save(){
    if(this.createForm.valid){
      const {backgroundColor, title} = this.createForm.getRawValue()
      this.boardService.createBoard(title, backgroundColor).subscribe({
        next: data =>{
          this.closeOverlay.next(false)
          this.router.navigate(['/home/board'],{ queryParams: { id: data.id } })
        },
        error: error => {

        }
      })
    }
  }
}
