import {RouterModule, Routes} from '@angular/router';
import { GamesMainComponent } from './components/games/games-main/games-main.component';
import { LibraryComponent } from './components/library/library.component';
import { NewsComponent } from './components/news/news.component';
import { StreamsComponent } from './components/streams/streams.component';




const APP_ROUTES: Routes = [
    { path: 'games', component: GamesMainComponent},
    { path: 'stream', component: StreamsComponent},
    { path: 'library', component: LibraryComponent},
    { path: 'news', component: NewsComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'games'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);