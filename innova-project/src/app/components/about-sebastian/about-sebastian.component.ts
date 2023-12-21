import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-sebastian',
  templateUrl: './about-sebastian.component.html',
  styleUrls: ['./about-sebastian.component.scss']
})
export class AboutSebastianComponent {

  constructor (private viewPortScroller: ViewportScroller) { }

  goToDrSebastianAnsaldi() {
    this.viewPortScroller.scrollToPosition([0,0]);
  }
}
