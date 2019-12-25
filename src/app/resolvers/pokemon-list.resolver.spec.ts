import { TestBed } from '@angular/core/testing';

import { PokemonListResolver } from './pokemon-list.resolver';

describe('PokemonListResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonListResolver = TestBed.get(PokemonListResolver);
    expect(service).toBeTruthy();
  });
});
