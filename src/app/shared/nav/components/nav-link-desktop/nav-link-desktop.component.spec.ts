import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLinkDesktopComponent } from './nav-link-desktop.component';

describe('NavLinkDesktopComponent', () => {
  let component: NavLinkDesktopComponent;
  let fixture: ComponentFixture<NavLinkDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavLinkDesktopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavLinkDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
