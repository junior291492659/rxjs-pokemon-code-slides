import React, {useState, useMemo} from 'react';
import { PokemonProvider, usePokemon } from '../store/store11.jsx'
import { useObservableState } from "observable-hooks";

const Deck = () => {
    const { deck$ } = usePokemon();
    const deck = useObservableState(deck$, []);

    return (
        <div>
            <h4>Deck</h4>
            <div>
                {deck.map((p) => (
                    <div key={p.id} style={{ display: "flex" }}>
                        <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
                        alt={p.name}
                        />
                        <div>
                        <div>{p.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const Search = () => {
    const [search, setSearch] = useState('');
    const { pokemon$, selected$ } = usePokemon();
    const pokemon = useObservableState(pokemon$,[]);

    const filteredPokemon = useMemo(() => {
        return pokemon.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    }, [pokemon, search]);
  
    return (
        <div style={{fontSize: '16px'}}>
            <input
                style={{fontSize: 'xx-large', width: '100%'}}
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div>
            {filteredPokemon.map((p) => (
                <div key={p.name}>
                    <input
                      type="checkbox"
                      checked={p.selected}
                      onChange={() => {
                          if (selected$.value.includes(p.id)) {
                          selected$.next(selected$.value.filter((id) => id !== p.id));
                          } else {
                          selected$.next([...selected$.value, p.id]);
                          }
                      }}
                    />
                    <strong>{p.name}</strong> - {p.power}
                </div>
            ))}
      </div>
        </div>
    );
}

export default () => {
      
    return (
        <PokemonProvider>
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                height: '100vh',
                overflow: 'auto',
                margin: '1rem 0 0 1rem',
                width: '100%'
            }}>
                <Search />
                <Deck />
            </div>
      </PokemonProvider>
    );
}