import { SwFacade } from './../state/sw.facade';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Filme } from '../model/sw.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public carregando = false;
  temaEscuro1:any;
  temaEscuro = (localStorage.getItem('temaEscuro') || false) == 'false' ? false : true;


  @Input() itens: Filme[] = [];

  constructor(public facade: SwFacade, private router: Router) { }

  ngOnInit(): void {
    this.facade.getFilmes();
    this.facade.films$.subscribe((res) => {
      console.log(res)
      this.itens = res;
    })
  }


  
  setTema(){
    this.temaEscuro1 = localStorage.setItem('temaEscuro', (!this.temaEscuro).toString());
  }

  onCarregando(event: any) {
   this.itens = event;
   this.facade.getFilmes();
   return this.itens;
  }

  pesquisar(characters: string[]) {
    this.facade.pesquisar(characters);
    this.router.navigate(["info"])
  }

  

}
