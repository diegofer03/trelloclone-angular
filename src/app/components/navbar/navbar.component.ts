import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateBoardComponent } from '../create-board/create-board.component';
import { BoardsService } from '../../services/boards.service';
import { ColorCard } from '../../models/app.models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonComponent, OverlayModule, FontAwesomeModule, RouterLink, CommonModule, CreateBoardComponent],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  authService = inject(AuthService)
  boardService = inject(BoardsService)
  router = inject(Router)
  route = inject(ActivatedRoute)
  faBell = faBell
  faInfoCircle = faInfoCircle
  isOpen = false;
  isCreate = false

  user$ = this.authService.user$
  color: string | null = 'home'

  mapColors = {
    home: '',
    sky: 'bg-sky-700 text-white',
    yellow: 'bg-yellow-700 text-white',
    green: 'bg-green-700 text-white',
    red: 'bg-red-700 text-white',
    violet: 'bg-violet-700 text-white',
    gray: 'bg-gray-700 text-white',
  }

  constructor(){

    this.boardService.color$.subscribe({
      next: response => {
        if(response != null){
          this.color = response
        }else{
          this.color = null
        }
      }
    })
  }

  get colorBg(){
    const color: ColorCard = (this.color != null ? this.color as ColorCard : 'home')
    const classes = this.mapColors[color]
    return classes ? classes : {};
  }

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
