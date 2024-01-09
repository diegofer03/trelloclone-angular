import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './board.component.html'
})
export class BoardComponent {

}
