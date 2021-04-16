import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'audioPlayer';

  // @ViewChild('audiofile', {static: true}) audioPlayer: ElementRef;

  song;

  audioPlayer: HTMLAudioElement;

  @ViewChild('audiofile', {static: true}) set playerRef(ref: ElementRef<HTMLAudioElement>) {
    this.audioPlayer = ref.nativeElement;
  }

  constructor() {}

  ngOnInit() {
  }

  playList = [
    { "name": "Keranirakaladum", "url": "assets/songlist/keranirakalladum.MP3", 
      "image": "assets/songImages/jalolsavam.jpg" },
    { "name": "Marthoma", "url": "assets/songlist/Marthomma_(KuttyWeb.com)_2.mp3", 
      "image": "assets/songImages/vazhunnor.jpg" },
    { "name": "Prayam nammil", "url": "assets/songlist/Prayam_Nammil_(KuttyWeb.com).mp3", 
      "image": "assets/songImages/niram.jpg" },
    { "name": "Gopike Hrudayamoru", "url": "assets/songlist/Gopike+Hrudayamoru.mp3", 
      "image": "assets/songImages/Nandanam.jpg" },
    { "name": "Lajjavathye", "url": "assets/songlist/Lajjavathye.mp3", 
      "image": "assets/songImages/fourthe.jpg" },
      { "name": "Keranirakaladum", "url": "assets/songlist/keranirakalladum.MP3", 
      "image": "assets/songImages/jalolsavam.jpg" },
    { "name": "Marthoma", "url": "assets/songlist/Marthomma_(KuttyWeb.com)_2.mp3", 
      "image": "assets/songImages/vazhunnor.jpg" },
    { "name": "Prayam nammil", "url": "assets/songlist/Prayam_Nammil_(KuttyWeb.com).mp3", 
      "image": "assets/songImages/niram.jpg" },
    { "name": "Gopike Hrudayamoru", "url": "assets/songlist/Gopike+Hrudayamoru.mp3", 
      "image": "assets/songImages/Nandanam.jpg" },
    { "name": "Lajjavathye", "url": "assets/songlist/Lajjavathye.mp3", 
      "image": "assets/songImages/fourthe.jpg" }
  ]


  playMusic(url, name) {
    
    this.audioPlayer.setAttribute('src', url);
    this.audioPlayer.load();
    this.audioPlayer.play();

    this.song = name;
  }
}

