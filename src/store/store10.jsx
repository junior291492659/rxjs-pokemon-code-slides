import React, { createContext } from 'react';
import { BehaviorSubject, map, combineLatestWith } from 'rxjs';
import axios from 'axios'

const rawPokemon$ = new BehaviorSubject([]);

export const pokemonWithPower$ = rawPokemon$.pipe(
    map((pokemon) =>
      pokemon.map((p) => ({
        ...p,
        power:
          p.hp +
          p.attack +
          p.defense +
          p.special_attack +
          p.special_defense +
          p.speed,
      }))
    )
  );

export const selected$ = new BehaviorSubject([]);

export const pokemon$ = pokemonWithPower$.pipe(
  combineLatestWith(selected$),
  map(([pokemon, selected]) =>
    pokemon.map((p) => ({
      ...p,
      selected: selected.includes(p.id),
    }))
  )
);

export const deck$ = pokemon$.pipe(
  map((pokemon) => pokemon.filter((p) => p.selected))
);

const PokemonContext = createContext({
  pokemon$,
  selected$,
  deck$,
});

export const PokemonProvider = ({ children }) => (
  <PokemonContext.Provider
    value={{
      pokemon$,
      selected$,
      deck$,
    }}
  >
    {children}
  </PokemonContext.Provider>
);

  axios.get("http://localhost:3005/pokemon")
  .then((res) => res.data)
  .then((data) => {
    rawPokemon$.next(data)
  })
  .catch(err => console.log('err', err));