import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ator, Filme } from '../model/sw.model';

@Injectable({
    providedIn: 'root'
})

export class SwState {
    getFilmes(filmsCollection: any) {
        throw new Error('Method not implemented.');
    }
    
    films: BehaviorSubject<Filme[]> = new BehaviorSubject<Filme[]>([])
    characters: BehaviorSubject<Ator[]> = new BehaviorSubject<Ator[]>([])
    //outros: BehaviorSubject<any> = new BehaviorSubject<any>(null)
    


    constructor() { }

    get filmsCollection(): Filme[] {
        return this.films.value;
    }

    get filmsCollection$():BehaviorSubject<Filme[]> {
        return this.films;
    }

    set filmsCollection(value: Filme[]) {
        this.films.next(value);
    }

    get charactersCollection(): Ator[] {
        return this.characters.value;
    }

    get charactersCollection$():BehaviorSubject<Ator[]> {
        return this.characters;
    }

    set charactersCollection(value: Ator[]) {
        this.characters.next(value);
    }

    // get outrosCollection(): any{
    //     return this.outros.value;
    // }

    // get outrosCollection$(): any{
    //     return this.outros.value;
    // }

    
    // set outrosCollection(value: any) {
    //     this.films.next(value);
    // }





}