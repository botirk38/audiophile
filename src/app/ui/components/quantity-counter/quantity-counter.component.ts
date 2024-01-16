import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quantity-counter',
  standalone: true,
  imports: [],
  templateUrl: './quantity-counter.component.html',
  styleUrl: './quantity-counter.component.css'
})
export class QuantityCounterComponent {


  @Input() quantity : number = 0;


  increment() {

    this.quantity+=1

  }


  decrement() {

      this.quantity-=1
  }


}
