import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonComponent, OverlayModule, FontAwesomeModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  authService = inject(AuthService)
  router = inject(Router)
  faBell = faBell
  faInfoCircle = faInfoCircle
  isOpen = false;

  // user$ = this.authService.user$

  logout(){
    this.authService.logout()
    this.router.navigate(['/login'])
    // this.authService.user$.subscribe({
    //   next: user =>{
    //     user = user
    //   }
    // })
  }
}
