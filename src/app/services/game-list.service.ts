import { Injectable } from '@angular/core';
import { GAMES } from '../data';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameListService {


  private games: Game[] = GAMES;

  constructor() { }

  getGames(): Game[]{
    return this.games;
  }
  

}
