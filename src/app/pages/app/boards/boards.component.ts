import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faAngleUp, faBorderAll, faBox, faClock, faGear, faHeart, faUsers, faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ProfileService } from '../../../services/profile.service';
import { Board } from '../../../models/app.models';
import { CardColorComponent } from '../../../components/card-color/card-color.component';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavbarComponent, FontAwesomeModule, CdkAccordionModule, CommonModule, RouterLink, CardColorComponent],
  templateUrl: './boards.component.html'
})
export class BoardsComponent {
  profileService = inject(ProfileService)

  boards: Board [] = []
  faTrello = faTrello
  faBox = faBox
  faWaveSqueare = faWaveSquare
  faClock = faClock
  faAngleDown = faAngleDown
  faAngleUp = faAngleUp
  faBorderAll = faBorderAll
  faGear = faGear
  faHeart = faHeart
  faUsers = faUsers

  // items = [
  //   {
  //     label: 'item 1',
  //     subItems: [
  //       {
  //         label: 'sub item 1'
  //       },
  //       {
  //         label: 'sub item 2'
  //       }
  //     ]
  //   },
  //   {
  //     label: 'item 2',
  //     subItems: [
  //       {
  //         label: 'sub item 1'
  //       },
  //       {
  //         label: 'sub item 2'
  //       }
  //     ]
  //   },
  //   {
  //     label: 'item 3'
  //   }
  // ]

  ngOnInit(){
    this.profileService.getBoards().subscribe({
      next: (response) =>{
        this.boards = response
      },
      error: error => {
        console.log(error)
      }
    })
  }
}
