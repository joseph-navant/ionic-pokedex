import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonListPage } from './pokemon-list.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonListPage
  },
  {
    path: ':id',
    loadChildren: () =>
      import('../pokemon-detail/pokemon-detail.module').then(m => m.PokemonDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonListPageRoutingModule {}
