import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ator } from '../model/sw.model';
import { SwFacade } from '../state/sw.facade';


@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {

  pesquisaInfos: string = '';
  url = 'https://swapi.dev/api/films/';
  itens: Ator[] =[];
  public carregando = false;
  temaEscuro = false
  
  @Output() onSubmit: EventEmitter<string> = new EventEmitter<string>();

  constructor(public facade: SwFacade) { }

  ngOnInit(): void {
    this.facade.characters$.subscribe(value => {
      this.itens = value;
    })

    
  }

  

 


  


}
