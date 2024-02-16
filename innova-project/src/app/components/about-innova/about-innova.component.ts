import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-innova',
  templateUrl: './about-innova.component.html',
  styleUrls: ['./about-innova.component.scss']
})
export class AboutInnovaComponent implements OnInit {
  
  ngOnInit(): void {
    this.playVideoOnLoad();
  }

  playVideoOnLoad() {
    const video = document.getElementById('innova-video') as HTMLVideoElement;
    if (video) {
      video.addEventListener('canplay', () => {
        video.play();
      });
      video.load();
    }
  }

  isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }
}
