import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() type : 'button' | 'reset' | 'submit' = 'button'
  @Input() bg : string = ''

  get colors(){
    return{
      'bg-success' : this.bg === "success",
      'bg-blue-400' : this.bg === ''
    }
  }
}
