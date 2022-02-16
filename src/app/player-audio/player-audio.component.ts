import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerAudio } from '../models/player-audio.model';
import { PlayerAudioService } from '../services/player-audio.service';

//decorateur; vient apporter des modification à une classe.
@Component({ 
  selector: 'app-player-audio',
  templateUrl: './player-audio.component.html'
})

//Method ng onInit, appeller au moment de la creation d"un component,
// une fois par component

//* extends means:
//The new class is a child. It gets benefits coming with inheritance.
//It has all properties, methods as its parent. 
//It can override some of these and implement new, but the parent stuff is already included.

//* implements means:
//The new class can be treated as the same "shape", while it is not a child. 
//It could be passed to any method where the Person is required, 
//regardless of having different parent than Person

export class PlayerAudioComponent implements OnInit {
  
  @Input() playerAudio!: PlayerAudio;
  public audio = new Audio();
  public clickedPlay = false;
  public percentageBar = 0;
  public currentTime!: string;
  public timeLeft!: string;
 

  constructor(private playerAudioService:  PlayerAudioService, private router: Router) {
  }

  ngOnInit(): void {
    this.currentTime = "00:00";
    this.timeLeft = "00:00";
    this.audio.src = this.playerAudio.source;
    this.audio.load();
    this.audio.addEventListener("timeupdate", (currentTime)=>{
      this.percentageBar = Math.round((this.audio.currentTime  / this.audio.duration)*100);  
      this.currentTime = this.readableDuration(this.audio.currentTime);
      this.timeLeft = this.readableDuration(Math.round(this.audio.duration - this.audio.currentTime));
      if (this.timeLeft === "00:00")
        this.clickedPlay = false;
    });
  }

  readableDuration(seconds: number) {
    let sec   = Math.floor( seconds );    
    let min = Math.floor( sec / 60 );
    let min_string = '';
    let sec_string = '';
    if (min < 10)
      min_string = '0'+ min.toString();
    else
      min_string = min.toString();
    sec = Math.floor( sec % 60 );
    if (sec < 10)
      sec_string = '0'+ sec.toString();
    else
      sec_string = sec.toString();
    return min_string + ':' + sec_string;
}
  
  onPlay()
  {
    if (!this.clickedPlay)
    {
      this.audio.play();
      this.clickedPlay = true;
    }
  }

  onPause()
  {
    if(this.clickedPlay)
    {
      this.audio.pause();
      this.clickedPlay = false;
    }
  }
}


