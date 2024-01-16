import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, RouterOutlet],
  templateUrl: './auth.component.html'
})
export default class AuthComponent {

}
