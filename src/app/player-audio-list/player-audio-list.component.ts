import { Component, OnInit } from '@angular/core';
import { PlayerAudio } from '../player-audio/player-audio.model';
import { PlayerAudioService } from '../player-audio/player-audio.service';


@Component({
  selector: 'app-player-audio-list',
  templateUrl: './player-audio-list.component.html'
})
export class PlayerAudioListComponent implements OnInit {

  playerAudios !: PlayerAudio[];
  lastAudio !: PlayerAudio;

  constructor(private playerAudioService: PlayerAudioService) {}
  ngOnInit(){
    this.playerAudios = this.playerAudioService.getAllAudioPlayers();
    this.lastAudio = this.playerAudioService.getAllAudioPlayers()[-1];
  }

}
