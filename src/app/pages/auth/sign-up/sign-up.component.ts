import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ButtonComponent, RouterLink],
  templateUrl: './sign-up.component.html',
})
export class SignupComponent {

}
