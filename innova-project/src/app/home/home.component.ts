import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}

  playVideoOnLoad() {
    const video = document.getElementById('video') as HTMLVideoElement;
    if (video) {
      video.addEventListener('canplay', () => {
        video.play();
      });
    }
  }

  isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }

  // playAudio() {
  //   const audio = document.getElementById('audio') as HTMLAudioElement;
  //   if (audio) {
  //       audio.addEventListener('canplay', () => {
  //       audio.play();
  //       console.log('audio played');
  //     });
  //     audio.load();
  //     console.log('audio loaded');
  //   }
  // }
}
