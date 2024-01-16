import { Component, Input} from '@angular/core';
import { CartListComponent } from '../cart-list/cart-list.component';
import { Item } from '../cart-list/cart-list.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-cart-modal',
  standalone: true,
  imports: [CartListComponent, NgIf],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.css'
})
export class CartModalComponent {

  @Input() cartOpen: boolean = false;
  @Input() cartItems: Item[] = [];


}
