import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  menuSoundClicked = false;
  menuArtistClicked = false;
  menuLabelClicked = false;
  menuContactClicked = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClickSound(){
    this.menuSoundClicked = !this.menuSoundClicked;
    this.menuArtistClicked = false;
    this.menuLabelClicked = false;
    this.menuContactClicked = false;
  }
  onClickArtist(){
    this.menuSoundClicked = false;
    this.menuArtistClicked = !this.menuArtistClicked;
    this.menuLabelClicked = false;
    this.menuContactClicked = false;
  }
  onClickLabel(){
    this.menuSoundClicked = false;
    this.menuArtistClicked = false;
    this.menuLabelClicked = !this.menuLabelClicked;
    this.menuContactClicked = false;
  }
  onClickContact(){
    this.menuSoundClicked = false;
    this.menuArtistClicked = false;
    this.menuLabelClicked = false;
    this.menuContactClicked = !this.menuContactClicked;
  }

}
