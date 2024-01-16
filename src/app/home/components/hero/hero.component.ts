import { Component } from '@angular/core';
import { ButtonPrimaryComponent } from '../../../ui/components/buttons/button-primary/button-primary.component';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonPrimaryComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
