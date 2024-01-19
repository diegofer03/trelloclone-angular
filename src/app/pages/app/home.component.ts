import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';


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

}
