export interface Retorno{

    count: number,
    next: any,
    previous: any,
    results: Filme[]
}

export interface Filme {

    characters : string[],
    created: string,
    director: string,
    edited: string,
    episode_id: number,
    opening_crawl: string,
    planets: string[],
    species: string[],
    starships: string[],
    title: string,
    url: string,
    vehicles: string[]
}

export interface Ator{

    birth_year: string,
    created: string,
    edited: string,
    eye_color: string,
    films: string[],
    gender: string,
    hair_color: string,
    height: string,
    homeworld: string,
    mass: string,
    name: string,
    skin_color: string,
    species: string[],
    starships: string[],
    url: string,
    vehicles: string[]
}

