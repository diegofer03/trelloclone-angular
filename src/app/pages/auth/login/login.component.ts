import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { faEye, faEyeSlash, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, RouterLink, ReactiveFormsModule, FontAwesomeModule, CommonModule],
  templateUrl: './login.component.html'
})
export default class LoginComponent {
  formBuilder = inject(FormBuilder)
  router = inject(Router)
  authService = inject(AuthService)

  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [ Validators.required, Validators.minLength(6)]],
  });

  faPen = faPen;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  status: string = 'init';

  constructor(
  ) { }

  doLogin() {
    if (this.form.valid) {
      this.status = 'loading';
      const { email, password } = this.form.getRawValue();
      console.log(email)
      // TODO
    } else {
      this.form.markAllAsTouched();
    }
  }

}
