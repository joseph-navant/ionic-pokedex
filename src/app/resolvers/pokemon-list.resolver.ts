import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonListResolver implements Resolve<any> {
  constructor(private pokemonService: PokemonService) {}

  resolve() {
    return this.pokemonService.getPokemonList();
  }
}
