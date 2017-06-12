import {Routes} from '@angular/router';
import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';
// import {ModuleWithProviders} from '@angular/core';

export const appRoutes: Routes = [
  { path: '', component: SearchComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'artists/:id', component: ArtistComponent},
  { path: 'albums/:id', component: AlbumComponent}
];

//  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);   