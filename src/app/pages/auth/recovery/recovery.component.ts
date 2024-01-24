import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { AuthService } from '../../../services/auth.service';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { status } from '../../../models/app.models';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
  selector: 'app-recovery',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './recovery.component.html'
})
export class RecoveryComponent {
  authService = inject(AuthService)
  formBuilder = inject(FormBuilder)
  route = inject(ActivatedRoute)
  router = inject(Router)

  form = this.formBuilder.nonNullable.group(
    {
      newPassword: ['', [Validators.minLength(6), Validators.required]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: [
        CustomValidators.MatchValidator('newPassword', 'confirmPassword'),
      ],
    }
  );
  status: status = 'init';
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  token = '';

  ngOnInit(){
    this.route.queryParamMap.subscribe(params => {
      const token = params.get('token');
      if (token) {
        this.token = token;
      } else {
        this.router.navigate(['/login']);
      }
    })
  }

  confirm(){
    if(this.form.valid){
      const {newPassword} = this.form.getRawValue()
      this.status = 'loading'
      this.authService.changePassword(this.token, newPassword).subscribe({
        next: data => {
          this.status = 'success';
          this.router.navigate(['/login']);
        },
        error: error => {
          this.status = 'failed';
          this.router.navigate(['/login']);
        }
      })
    }
  }
}
