"use strict";
var search_component_1 = require('./components/search/search.component');
var about_component_1 = require('./components/about/about.component');
var contact_component_1 = require('./components/contact/contact.component');
var artist_component_1 = require('./components/artist/artist.component');
var album_component_1 = require('./components/album/album.component');
// import {ModuleWithProviders} from '@angular/core';
exports.appRoutes = [
    { path: '', component: search_component_1.SearchComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'artists/:id', component: artist_component_1.ArtistComponent },
    { path: 'albums/:id', component: album_component_1.AlbumComponent }
];
//  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);    
//# sourceMappingURL=app.routes.js.map