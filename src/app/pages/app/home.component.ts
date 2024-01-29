import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';


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

  ngOnInit(){
    this.authService.profile().subscribe({
      next: (response) => {
        console.log(response)
        this.authService.user$.next(response)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
