import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-link-desktop',
  standalone: true,
  imports: [],
  templateUrl: './nav-link-desktop.component.html',
  styleUrl: './nav-link-desktop.component.css'
})
export class NavLinkDesktopComponent {

  @Input() destSrc : string = "";
  @Input() destName: string = "";

}
