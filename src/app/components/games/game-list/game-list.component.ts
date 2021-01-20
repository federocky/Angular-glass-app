import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GameListService } from 'src/app/services/game-list.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit, OnChanges {
  @Input() toFind: string;
  @Input() toAdd: string;

  games: Game[] = [];

  constructor( private gameService: GameListService) {

    this.games = gameService.getGames();
    
   }

  ngOnInit(): void {
  }

  ngOnChanges(){
    /* cuando se detecta un cambio creamos el nuevo juego y lo metemos en la lista
      aqui se deberia meter un formulario en condiciones para manejar el porcentaje,
      imagen y demas, pero de momento se queda asi.
    */
    let newGame: Game = {
      name: this.toAdd,
      version: 'PS5 Version Updated', 
      progress: 0, 
      img: '../../../../assets/img/noimage.png'};

    if(this.toAdd != '') this.games.push(newGame);
  }


  /**
   * Mostramos la lista completa o filtrada por palabra
   * si se esta utilizando el buscador.
   */
  toList(): Game[]{
    if(this.toFind != '') {
      return this.games.filter( game => game.name.includes(this.toFind));
    } else return this.games;
  }

}
