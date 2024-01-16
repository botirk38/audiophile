import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from '../../ui/components/nav/logo/logo.component';
import { NavLinkDesktopComponent } from "./components/nav-link-desktop/nav-link-desktop.component"
import {
  trigger,
  state,
  style,
  animate,
  transition,

} from '@angular/animations';

import { CartIconComponent } from '../../ui/components/cart/cart-icon/cart-icon.component';

import { CartListComponent } from '../../ui/components/cart/cart-list/cart-list.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LogoComponent, NavLinkDesktopComponent, CartListComponent, CartIconComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
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
export class NavComponent {
  cartOpen: boolean = false;


  toggleCart() {

    this.cartOpen = !this.cartOpen;
  }


  navItems = [

    {

      linkName: "Headphones",
      linkDest: "/headphones",


    },

    {
      linkName: "Speakers",
      linkDest: "/speakers",
    },

    {
      linkName: "Earphones",
      linkDest: "/earphones",
    },
  ]

  cartItems = [



  ]

}
