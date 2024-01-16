import { Component, Input } from '@angular/core';
import {CartItemComponent} from "../cart-item/cart-item.component"

export type Item =  {
  imageUrl: string; // URL of the image in S3
  title: string;    // Title of the item
  price: number;    // Price of the item
  quantity: number; // Quantity of the item
}


@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})
export class CartListComponent {

    @Input() cartItems: Item[] | undefined;

}
