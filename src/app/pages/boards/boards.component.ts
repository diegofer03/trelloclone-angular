import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faBox, faClock, faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavbarComponent, FontAwesomeModule],
  templateUrl: './boards.component.html'
})
export class BoardsComponent {
  faTrello = faTrello
  faBox = faBox
  faWaveSqueare = faWaveSquare
  faClock = faClock
}
