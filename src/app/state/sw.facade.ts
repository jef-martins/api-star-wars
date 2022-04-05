import { SwApi } from './../sw.api';
import { SwState } from "./sw.state";
import { Injectable } from "@angular/core";
import { lastValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SwFacade {

    public films$ = this.state.films;
    public characters$ = this.state.characters;
    // public outros$ = this.state.outros;
    filmsCollection: any;
    public carregando = false;


    constructor(

        private state: SwState,
        private api: SwApi

    ) { }

    getFilmes() {
        this.api.listar().subscribe((res) => {
            this.state.filmsCollection = res.results;
            this.carregando = true;
            this.filmsCollection = res;
        })
    }

    async pesquisar(characters: string[]) {
        this.carregando = false;
        this.state.charactersCollection = [];
        for await (let char of characters)
            this.state.charactersCollection.push(await lastValueFrom(this.api.listarCharacters(char)));
        this.carregando = true;
    }


}

