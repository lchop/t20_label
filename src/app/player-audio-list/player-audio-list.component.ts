import { Component, OnInit } from '@angular/core';
import { PlayerAudio } from '../models/player-audio.model';
import { PlayerAudioService } from '../services/player-audio.service';

@Component({
  selector: 'app-player-audio-list',
  templateUrl: './player-audio-list.component.html'
})
export class PlayerAudioListComponent implements OnInit {

  playerAudios !: PlayerAudio[];
  constructor(private playerAudioService: PlayerAudioService) {}
  ngOnInit(){
    this.playerAudios = this.playerAudioService.getAllAudioPlayers();
  }

}
