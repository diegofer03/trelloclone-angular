import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { status } from '../../../models/app.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ButtonComponent, RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {
  formBuilder = inject(FormBuilder)
  authService = inject(AuthService)

  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]]
  })

  status: status = 'init';
  emailSent = false;

  sendLink(){
    if(this.form.valid){
      this.status = 'loading'
      const {email} = this.form.getRawValue()
      this.authService.recovery(email).subscribe({
        next: (data) => {
          this.status = 'success';
          this.emailSent = true;
        },
        error: (error) => {
          this.status = 'failed'
        }
      })
    }
  }
}
