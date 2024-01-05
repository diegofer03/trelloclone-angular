import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() type : 'button' | 'reset' | 'submit' = 'button'
  @Input() bg : string = 'white'
}
