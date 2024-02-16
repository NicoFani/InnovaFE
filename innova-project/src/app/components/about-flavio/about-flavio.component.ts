import { Component } from '@angular/core';

@Component({
  selector: 'app-about-flavio',
  templateUrl: './about-flavio.component.html',
  styleUrls: ['./about-flavio.component.scss'],
})
export class AboutFlavioComponent {
  goToDrFlavioMarchesini() {
    window.open('https://www.flaviomarchesini.com/');
  }
}
