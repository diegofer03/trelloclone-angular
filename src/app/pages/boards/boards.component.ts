import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faAngleUp, faBorderAll, faBox, faClock, faGear, faHeart, faUsers, faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavbarComponent, FontAwesomeModule, CdkAccordionModule],
  templateUrl: './boards.component.html'
})
export class BoardsComponent {
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
}
