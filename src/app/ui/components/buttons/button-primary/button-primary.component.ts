import { Component , Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-button-primary',
  standalone: true,
  imports: [],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.css'
})
export class ButtonPrimaryComponent {

  @Output() buttonClicked = new EventEmitter<void>();
  @Input() text : string | undefined;

  onButtonClick() {

    this.buttonClicked.emit;


  }

}
