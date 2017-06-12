import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../services/spotify.service';
import {Album} from '../../../../Album';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: 'album.component.html',
  providers:[SpotifyService]
})
export class AlbumComponent implements OnInit { 
    id: string;
    album: Album;
    
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

                this._spotifyService.getAlbum(this.id)
                .subscribe(alb=>{
                this.album= alb;});
        })

    }
}
