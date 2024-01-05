import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './login.component.html'
})
export default class LoginComponent {

}
