import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import {OverlayModule} from '@angular/cdk/overlay';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonComponent, OverlayModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isOpen = false;
}
