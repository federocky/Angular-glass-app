import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GamesMainComponent } from './components/games/games-main/games-main.component';
import { GameListComponent } from './components/games/game-list/game-list.component';
import { GameSearchComponent } from './components/games/game-search/game-search.component';
import { GameAddComponent } from './components/games/game-add/game-add.component';
import { GameInfoComponent } from './components/games/game-info/game-info.component';
import { StreamsComponent } from './components/streams/streams.component';
import { NewsComponent } from './components/news/news.component';
import { LibraryComponent } from './components/library/library.component';
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavBarComponent,
    GamesMainComponent,
    GameListComponent,
    GameSearchComponent,
    GameAddComponent,
    GameInfoComponent,
    StreamsComponent,
    NewsComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
