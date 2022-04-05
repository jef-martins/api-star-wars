import { SwState } from '../state/sw.state';
import { Component, OnInit } from '@angular/core';
import { SwFacade } from '../state/sw.facade';


@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  

  url = 'https://swapi.dev/api/films/1/';

  
  itensListados: any = '';
  

  constructor(public facade: SwFacade) {

  }

  ngOnInit(): void {

    const listando = this.facade.films$.subscribe((itens: any) => {
      this.itensListados = itens;
    });
    
  }

 
  


}
