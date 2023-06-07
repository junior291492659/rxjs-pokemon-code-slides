import { BehaviorSubject } from 'rxjs';
import axios from 'axios'

export const rawPokemon$ = new BehaviorSubject([]);

axios.get("http://localhost:3005/pokemon")
  .then((res) => res.data)
  .then((data) => {
    rawPokemon$.next(data)
  })
  .catch(err => console.log('err', err));

// global.fetch("http://localhost:3005/pokemon")
//   .then((res) => res.json())
//   .then((data) => rawPokemon$.next(data));