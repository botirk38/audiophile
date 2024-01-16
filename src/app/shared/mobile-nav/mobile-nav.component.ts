import { NgOptimizedImage, NgIf, NgFor } from '@angular/common'
import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,

} from '@angular/animations';

import {NavLinkComponent} from "./components/nav-link/nav-link.component"
import {QuantityCounterComponent} from "../../ui/components/quantity-counter/quantity-counter.component"
import {CartListComponent} from "../../ui/components/cart/cart-list/cart-list.component"
import {CartIconComponent} from "../../ui/components/cart/cart-icon/cart-icon.component"
import {LogoComponent} from "../../ui/components/nav/logo/logo.component"
import {CartModalComponent} from "../../ui/components/cart/cart-modal/cart-modal.component"

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [NgOptimizedImage, NgIf, NgFor, NavLinkComponent, QuantityCounterComponent, CartListComponent, CartIconComponent, LogoComponent, CartModalComponent],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.css',
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300)
      ]),
      transition(':leave',
        animate(300, style({ opacity: 0 }))
      )
    ])
  ]
})

export class MobileNavComponent {

  menuOpen = false;
  cartOpen = false;

  navItems = [
    {
      imgSrc: '/assets/shared/desktop/image-category-thumbnail-headphones.png',
      categoryName: 'Headphones'
    },
    {
      imgSrc: '/assets/shared/desktop/image-category-thumbnail-speakers.png',
      categoryName: 'Speakers'
    },
    {
      imgSrc: '/assets/shared/desktop/image-category-thumbnail-earphones.png',
      categoryName: 'Earphones'
    }
  ];

  cartItems = [



  ]


  toggleMenu() {

    this.menuOpen = !this.menuOpen;

  }

  toggleCart() {

    this.cartOpen = !this.cartOpen
  }

}
