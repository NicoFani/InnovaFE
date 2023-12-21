import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-robotic-surgery',
  templateUrl: './about-robotic-surgery.component.html',
  styleUrls: ['./about-robotic-surgery.component.scss']
})
export class AboutRoboticSurgeryComponent {

  constructor(private viewPortScroller: ViewportScroller) { }

  goToRoboticSurgery(): void {
    this.viewPortScroller.scrollToPosition([0,0]);
  }
}
