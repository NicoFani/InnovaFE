import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    this.playVideoOnLoad();
  }

  playVideoOnLoad() {
    const video = document.getElementById('video') as HTMLVideoElement;
    if (video) {
      video.addEventListener('canplay', () => {
        video.play();
      });
      video.load();
    }
  }
}
