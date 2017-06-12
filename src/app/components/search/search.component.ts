import { Component } from '@angular/core';
import {SpotifyService} from '../services/spotify.service';
import {Artist} from '../../../../Artist';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: `search.component.html`,
  providers:[SpotifyService]
})

export class SearchComponent  { 
    searchRes: Artist[];

    constructor(private _spotifyService: SpotifyService){

    }
    searchmusic(searchstring: string){
    
        this._spotifyService.searchMusic(searchstring, "artist")
        .subscribe(res => {
            this.searchRes=res.artists.items;
        });

    }
}
