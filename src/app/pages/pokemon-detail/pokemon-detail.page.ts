import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/models/pokeapi';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss']
})
export class PokemonDetailPage implements OnInit {
  pokemon: Pokemon;
  slideOpts = {
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    }
  };

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemonDetails(id).subscribe(pokemon => {
      this.pokemon = pokemon;
    });
  }
}
