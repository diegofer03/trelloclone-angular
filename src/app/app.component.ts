import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
  <div *ngIf="loading" class="w-screen block h-screen bg-gray-500 opacity-70 absolute z-50">

  </div>
  <router-outlet/>`
})
export class AppComponent {
  userService = inject(UsersService)
  title = 'trello-clone';
  loading = false
  ngOnInit(){
    this.userService.loading$.subscribe({
      next: data => {
        this.loading = data
        console.log('loading',this.loading)
      }
    })
  }
}
