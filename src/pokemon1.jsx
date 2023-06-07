import {BehaviorSubject} from 'rxjs'

const rawPokemon$ = new BehaviorSubject([]);

fetch("/pokemon-simplified.json")
  .then((res) => res.json())
  .then((data) => rawPokemon$.next(data));