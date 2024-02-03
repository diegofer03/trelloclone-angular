import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-create-board',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './create-board.component.html'
})
export class CreateBoardComponent {
  formBuilder = inject(FormBuilder)

  createForm = this.formBuilder.group({
    backgroundColor: ['', Validators.required],
    title: ['', Validators.required]
  })

  save(){
    if(this.createForm.valid){
      const {backgroundColor, title} = this.createForm.getRawValue()
      console.log(backgroundColor, title)
    }
  }
}
