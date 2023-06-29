import React, {useState, useMemo, useEffect} from 'react';
import { selected$, pokemon$ } from '../store/store7.jsx'

const Search = () => {
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const sub = pokemon$.subscribe(setPokemon);
        return () => sub.unsubscribe();
    }, []);

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
      <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          height: '100vh',
          overflow: 'auto',
          margin: '1rem 0 0 1rem',
          width: '100%'
      }}>
          <Search />
          hello pokemonWithPower$
      </div>
    );
}