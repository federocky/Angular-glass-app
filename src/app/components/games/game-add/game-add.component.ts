import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.scss']
})
export class GameAddComponent implements OnInit {

  //mandamos la palabra para ser buscada en la lista
  @Output() toAdd: EventEmitter<string> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

}
