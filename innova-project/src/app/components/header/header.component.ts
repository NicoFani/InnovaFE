import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  scrolled = false;
  currentRoute: string = '';
  public active: boolean = false;

  constructor(
    private renderer: Renderer2,
    private viewPortScroller: ViewportScroller,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) {}

  ngOnInit() {
    // Se utiliza para obtener la ruta actual y poder aplicar estilos al header
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.currentRoute = this.activatedRoute.snapshot.firstChild?.url[0]?.path || '';
    });
  }

  @HostListener('window:scroll',['$event'])

  onScroll(event: Event): void {
    if (window.scrollY > 0) {
      this.scrolled = true;
      this.renderer.addClass(document.querySelector('.header'), 'in-scroll');
    } else {
      this.scrolled = false;
      this.renderer.removeClass(document.querySelector('.header'),'in-scroll');
    }
  }

  goToHome(): void {
    this.viewPortScroller.scrollToPosition([0,0]);
  }

  goToRoboticSurgery(): void {
    this.viewPortScroller.scrollToAnchor('robotic-surgery');
  }

  goToDrBernava(): void {
    this.viewPortScroller.scrollToAnchor('dr-bernava');
  }

  goToFooter(): void {
    this.viewPortScroller.scrollToAnchor('footer');
  }

  setActive(): void {
    this.active = !this.active;
    console.log('hola');
  }

}
