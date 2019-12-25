import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonResolver implements Resolve<any> {
  constructor(private pokemonService: PokemonService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id');
    return this.pokemonService.getPokemonDetails(id);
  }
}
