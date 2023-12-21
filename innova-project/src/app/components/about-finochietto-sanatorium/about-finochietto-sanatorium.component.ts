import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-finochietto-sanatorium',
  templateUrl: './about-finochietto-sanatorium.component.html',
  styleUrls: ['./about-finochietto-sanatorium.component.scss']
})
export class AboutFinochiettoSanatoriumComponent {

  constructor(private router: Router) { }

  redirectToFinochietto() {
    window.location.href = 'https://www.sanatoriofinochietto.com/NovedadesPacientes/DaVinciXi';
  }

}
