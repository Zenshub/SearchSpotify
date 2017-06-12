import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../services/spotify.service';
import {Artist} from '../../../../Artist';
import {Album} from '../../../../Album';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html',
  providers:[SpotifyService]
})
export class ArtistComponent implements OnInit { 
    id: string;
    artist: Artist;
    albums: Album[];
    
    constructor(
        private _spotifyService: SpotifyService,
        private _route: ActivatedRoute){
    }

     ngOnInit(){
        this._route.params
        .subscribe(
            (params)=>{
                this.id = params['id'];
                console.log(this.id);
                this._spotifyService.getArtist(this.id)
            .subscribe(arst=>{
                console.log(arst);
                this.artist= arst;});

                this._spotifyService.getAlbums(this.id)
                .subscribe(albs=>{
                this.albums= albs.items;});
        })

    }
}
