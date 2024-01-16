import { Component, Input } from '@angular/core';
import { QuantityCounterComponent } from '../../quantity-counter/quantity-counter.component';
@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [QuantityCounterComponent],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {

  @Input() imageUrl: string = "";
  @Input() title: string = "";
  @Input() price: number = 0;
  @Input() quantity: number = 0;

}
