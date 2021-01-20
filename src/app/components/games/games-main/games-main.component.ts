import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-main',
  templateUrl: './games-main.component.html',
  styleUrls: ['./games-main.component.scss']
})
export class GamesMainComponent implements OnInit {
  
  //variable para buscar en la lista
  toSearch: string = '';

  //variable para agregar en la lista
  toAdd: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  //aplica el valor recibido a la variable
  searching( ev: string): void{
    this.toSearch = ev;
    //console.log(this.toSearch);
  }

  //aplica el valor recibido a la variable.
  add( ev: string ): void {
    this.toAdd = ev;
  }

}
