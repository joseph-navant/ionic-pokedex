import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PokeApi, Pokemon } from '../models/pokeapi';

const BASE_URL = 'https://pokeapi.co/api/v2';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonList(offset = 0) {
    return this.http.get<PokeApi>(`${BASE_URL}/pokemon?offset=${offset}&limit=25`).pipe(
      map(response => {
        return response.results;
      }),
      map(pokemons => {
        return pokemons.map((pokemon, index) => {
          pokemon.id = offset + index + 1;
          pokemon.image = this.getImageURL(pokemon.id);
          return pokemon;
        });
      })
    );
  }

  findPokemon(search: string) {
    return this.http.get<Pokemon>(`${BASE_URL}/pokemon/${search}`).pipe(
      map(pokemon => {
        pokemon.image = this.getImageURL(pokemon.id);
        return pokemon;
      })
    );
  }

  getPokemonDetails(index: string) {
    return this.http.get<Pokemon>(`${BASE_URL}/pokemon/${index}`).pipe(
      map(pokemon => {
        // converting sprites obj (json) into array; discarding nulls
        const sprites = Object.keys(pokemon.sprites);
        pokemon.images = sprites.map(sprite => pokemon.sprites[sprite]).filter(img => img);
        return pokemon;
      })
    );
  }

  private getImageURL(index: number) {
    const IMAGE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    return `${IMAGE_URL}${index}.png`;
  }
}
