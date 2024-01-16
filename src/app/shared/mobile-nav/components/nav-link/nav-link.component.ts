import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [],
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.css'
})
export class NavLinkComponent {

  @Input() imgSrc: string | undefined;
  @Input() categoryName: string | undefined;




}
