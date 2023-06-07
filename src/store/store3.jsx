import { BehaviorSubject, map } from 'rxjs';
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

  axios.get("http://localhost:3005/pokemon")
  .then((res) => res.data)
  .then((data) => {
    rawPokemon$.next(data)
  })
  .catch(err => console.log('err', err));