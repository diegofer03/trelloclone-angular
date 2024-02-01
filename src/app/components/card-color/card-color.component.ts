import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ColorCard } from '../../models/app.models';

@Component({
  selector: 'card-color',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-color.component.html'
})
export class CardColorComponent {

  @Input() color: ColorCard = 'sky';

  mapColors = {
    sky: 'bg-sky-700 hover:bg-sky-800 text-white',
    yellow: 'bg-yellow-700 hover:bg-yellow-800 text-white',
    green: 'bg-green-700 hover:bg-green-800 text-white',
    red: 'bg-red-700 hover:bg-red-800 text-white',
    violet: 'bg-violet-700 hover:bg-violet-800 text-white',
    gray: 'bg-gray-700 hover:bg-gray-800 text-white',
  }

  get colors() {
    const classes = this.mapColors[this.color];
    console.log(classes)
    return classes ? classes : {};
  }

}
