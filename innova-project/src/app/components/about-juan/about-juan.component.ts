import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-juan',
  templateUrl: './about-juan.component.html',
  styleUrls: ['./about-juan.component.scss']
})
export class AboutJuanComponent {

  constructor(private viewPortScroller: ViewportScroller) { }

  goToDrJuanLuisBernava() {
    this.viewPortScroller.scrollToPosition([0,0]);
  }
}
