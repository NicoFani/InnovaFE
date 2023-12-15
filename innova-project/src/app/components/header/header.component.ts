import { ViewportScroller } from '@angular/common';
import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  scrolled = false;

  constructor(
    private renderer: Renderer2,
    private viewPortScroller: ViewportScroller,
    ) {}

    @HostListener('window:scroll',['$event'])

  onScroll(event: Event): void {
    if (window.scrollY > 0) {
      this.scrolled = true;
      this.renderer.addClass(document.querySelector('.header-container'), 'in-scroll');
    } else {
      this.scrolled = false;
      this.renderer.removeClass(document.querySelector('.header-container'),'in-scroll');
    }
  }

  goToHome(): void {
    this.viewPortScroller.scrollToPosition([0,0]);
  }

}
