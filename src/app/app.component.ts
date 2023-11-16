// src/app/app.component.ts
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // @Output() toggleSidePanel = new EventEmitter<void>();

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router
  ) {}

  openNav() {
    const sideNavElement = this.el.nativeElement.querySelector('#mySidenav');
    if (sideNavElement) {
      this.renderer.setStyle(sideNavElement, 'width', '250px');
    }
  }

  closeNav() {
    const sideNavElement = this.el.nativeElement.querySelector('#mySidenav');
    if (sideNavElement) {
      this.renderer.setStyle(sideNavElement, 'width', '0');
    }
  }
}
