import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ator, Retorno } from './model/sw.model';

@Injectable({
    providedIn: 'root'
})

export class SwApi {

    url = 'https://swapi.dev/api/films/';

    constructor(private http: HttpClient) { }

    listar() {
        const response = this.http.get<Retorno>(this.url);
        return response;
    }

    listarCharacters(url:string) {
        const response = this.http.get<Ator>(url);
        return response;
    }

    getUrl(url: string){
        const response = this.http.get(url);
        return response;
    }
}