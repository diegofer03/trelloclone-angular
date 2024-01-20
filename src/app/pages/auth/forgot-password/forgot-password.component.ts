import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ButtonComponent, RouterLink],
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {

}
