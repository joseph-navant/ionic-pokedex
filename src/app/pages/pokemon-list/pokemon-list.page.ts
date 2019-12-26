import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/models/pokeapi';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss']
})
export class PokemonListPage implements OnInit {
  private offset = 0;
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadPokemon();
  }

  loadPokemon(loadMore = false, evt?: { target: { complete: () => void } }) {
    if (loadMore) {
      this.offset += 25;
    }

    this.pokemonService
      .getPokemonList(this.offset)
      .pipe(take(1))
      .subscribe((pokemons: Pokemon[]) => {
        this.pokemons = [...this.pokemons, ...pokemons];

        if (evt) {
          evt.target.complete();
        }
      });
  }

  onSearch(evt: CustomEvent) {
    const value = evt.detail.value;

    if (value) {
      this.pokemonService.findPokemon(value).subscribe(
        res => {
          this.pokemons = [res];
        },
        err => {
          this.pokemons = [];
          console.error(err);
        }
      );
    } else {
      this.offset = 0;
      this.pokemons = [];
      this.loadPokemon();
      return;
    }
  }
}
