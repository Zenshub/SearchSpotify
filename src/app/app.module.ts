import { NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';
import { AppComponent }  from './app.component';
import {RouterModule} from '@angular/router';
import { appRoutes }  from './app.routes';
// import {Logger} from "angular2-logger/core";
import {HttpModule} from '@angular/http';
// import {SpotifyService} from './components/services/spotify.service';

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), HttpModule],
  declarations: [ AppComponent, NavbarComponent, AboutComponent, SearchComponent, ArtistComponent, AlbumComponent, ContactComponent],
  // providers: [SpotifyService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
