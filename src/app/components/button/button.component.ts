import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() type : 'button' | 'reset' | 'submit' = 'button'
  @Input() bg : string = ''
  @Input() disabled : boolean = false
  @Input() loading : boolean = false
  faSpinner = faSpinner

  get colors(){
    return{
      'bg-success' : this.bg === "success",
      'bg-blue-400' : this.bg === ''
    }
  }
}
