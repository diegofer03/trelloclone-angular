import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { faTrello } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  template: `
    <div class="flex flex-col h-screen">
      <app-navbar></app-navbar>
      <div class="w-full grow ">
        <router-outlet/>
      </div>
    </div>
  `
})
export class HomeComponent {
  authService = inject(AuthService)
  favIcon: HTMLLinkElement | null = document.querySelector('#appIcon');
  faTrello = faTrello
  ngOnInit(){
    this.authService.profile().subscribe({
      next: (response) => {
        this.authService.user$.next(response)
      },
      error: (error) => {
        console.log(error)
      }
    })
    this.favIcon!.href = 'https://w7.pngwing.com/pngs/115/721/png-transparent-trello-social-icons-icon-thumbnail.png'
  }
}
