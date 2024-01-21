import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { status } from '../../../models/app.models';
import { faEye, faEyeSlash, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

export class CustomValidators {
  static MatchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { mismatch: true }
        : null;
    };
  }
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ButtonComponent, RouterLink, ReactiveFormsModule, FontAwesomeModule, CommonModule],
  templateUrl: './sign-up.component.html',
})
export class SignupComponent {
  formBuilder = inject(FormBuilder)
  authService = inject(AuthService)
  route = inject(Router)

  formUser = this.formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
  })

  form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPass: ['', [Validators.required, Validators.minLength(8)]]
  }, {
    validators: [CustomValidators.MatchValidator('password', 'confirmPass')]
  })

  status: status = 'init'
  statusUser:boolean = true
  faPen = faPen
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;

  register(){
    if(this.form.valid){
      this.status = 'loading'
      const { name, email, password} = this.form.getRawValue()
      this.authService.register(email, name, password).subscribe({
        next: (data) =>{
          this.status = 'success'
          this.route.navigate(['/login'])
        },
        error: (error) => {
          this.status = 'failed'
          console.log(error)
        }
      })
    }else this.form.markAllAsTouched()
  }

  validateUser() {
    if (this.form.controls.email.valid) {
      const { email } = this.form.getRawValue();
      this.authService.isAvailable(email)
      .subscribe({
        next: (rta:any) => {
          if (rta.isAvailable) {
            this.statusUser = true;
          } else {
            this.statusUser = false;
          }
        },
        error: (error) => {
          console.log(error);
        }
      })
    } else {
      this.form.markAllAsTouched();
    }
  }
}
