import { TestBed } from '@angular/core/testing';

import { PokemonResolver } from './pokemon.resolver';

describe('PokemonResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonResolver = TestBed.get(PokemonResolver);
    expect(service).toBeTruthy();
  });
});
