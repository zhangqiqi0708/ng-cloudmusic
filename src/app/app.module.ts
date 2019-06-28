import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { HeaderComponent } from './component/header/header.component';
import { AudioPlayingComponent } from './component/audio-playing/audio-playing.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';



const appRoutes:Routes = [
  {
    path:"main",component:MainComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    AudioPlayingComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
