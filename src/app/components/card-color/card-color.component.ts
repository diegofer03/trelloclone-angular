import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-color',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-color.component.html'
})
export class CardColorComponent {

  @Input() color!: keyof typeof this.mapColors;

  mapColors = {
    sky: 'bg-sky-700 hover:bg-sky-800 text-white',
    yellow: 'bg-sky-700 hover:bg-sky-800 text-white',
    green: 'bg-green-700 hover:bg-green-800 text-white',
    red: 'bg-green-700 hover:bg-green-800 text-white',
    violet: 'bg-sky-700 hover:bg-sky-800 text-white',
    gray: 'bg-green-700 hover:bg-green-800 text-white',
  }

  get colors() {
    const classes = this.mapColors[this.color];
    console.log(classes)
    return classes ? classes : {};
  }

}
