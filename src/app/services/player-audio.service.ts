import { Injectable } from "@angular/core";
import { PlayerAudio } from "../models/player-audio.model";

 @Injectable ({
     providedIn: 'root'
 })
 export class PlayerAudioService {
    playerAudios: PlayerAudio[] = [
        {
          id: 1,
          title: "Louis",
          artiste: "RAZO",
          source: "../../../assets/audio/test.mp3",
          createdDate: new Date(),
          snaps: 200,
          location: "Paris"
        },
        {
          id: 1,
          title: "Louis",
          artiste: "RAZO",
          source: "../../../assets/audio/test.mp3",
          createdDate: new Date(),
          snaps: 200,
          location: "Paris"
        },
        {
          id: 1,
          title: "Louis",
          artiste: "RAZO",
          source: "../../../assets/audio/test.mp3",
          createdDate: new Date(),
          snaps: 200,
          location: "Paris"
        }
      ]
      getAllAudioPlayers(): PlayerAudio[] {
      return this.playerAudios;
    }
 }