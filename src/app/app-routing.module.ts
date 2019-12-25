import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PokemonListResolver } from 'src/app/resolvers/pokemon-list.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  {
    path: 'pokemons',
    resolve: {
      pokemons: PokemonListResolver
    },
    loadChildren: () =>
      import('./pages/pokemon-list/pokemon-list.module').then(m => m.PokemonListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
