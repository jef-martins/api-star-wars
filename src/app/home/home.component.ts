import { SwFacade } from './../state/sw.facade';
import { Component, Input, OnInit } from '@angular/core';
import { ConteudoComponent } from '../conteudo/conteudo.component';
import { InfosComponent } from '../infos/infos.component';
import { Filme } from '../model/sw.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public carregando = false;
  //temaEscuro = localStorage.setItem('temaEscuro', 'false');
  temaEscuro = false;


  @Input() itens: Filme[] = [];

  constructor(public facade: SwFacade, private router: Router) { }

  ngOnInit(): void {
    //console.log(this.temaEscuro)
    this.facade.getFilmes();
    this.facade.films$.subscribe((res) => {
      console.log(res)
      this.itens = res;
    })
  }
  //   onCarregando(infos: string){
  //     const response = this.pesquisar + infos;
  //     return response;
  // }

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
