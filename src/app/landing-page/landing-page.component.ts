import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerAudio } from '../player-audio/player-audio.model';
import { PlayerAudioService } from '../player-audio/player-audio.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  lastAudio !: PlayerAudio;

  constructor(private router: Router, private playerAudioService: PlayerAudioService) { }

  ngOnInit(): void {
    this.lastAudio = this.playerAudioService.getAllAudioPlayers()[-1];
  }

  onContinue(){
    this.router.navigateByUrl('sons');
  }

}
