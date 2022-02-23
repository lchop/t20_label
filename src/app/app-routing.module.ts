import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlayerAudioListComponent } from "./player-audio-list/player-audio-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";


const routes: Routes = [
    { path: 'sons', component: PlayerAudioListComponent},
    { path: '', component: LandingPageComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule 
    ]
})
export class AppRoutingModule{}