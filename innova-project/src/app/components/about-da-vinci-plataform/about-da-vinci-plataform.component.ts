import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-da-vinci-plataform',
  templateUrl: './about-da-vinci-plataform.component.html',
  styleUrls: ['./about-da-vinci-plataform.component.scss']
})
export class AboutDaVinciPlataformComponent {

  constructor(private router: Router) {}

  redirectToIntuitive() {
    window.location.href = 'https://www.intuitive.com/en-us/products-and-services/da-vinci';
  }
}
