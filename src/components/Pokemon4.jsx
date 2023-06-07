import React, {useState, useMemo, useEffect} from 'react';
import { pokemonWithPower$ } from '../store/store4.jsx'

const Search = () => {
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const sub = pokemonWithPower$.subscribe(setPokemon);
        return () => sub.unsubscribe();
    }, []);

    const filteredPokemon = useMemo(() => {
        return pokemon.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    });
  
    return (
        <div>
            <input
                style={{fontSize: 'xx-large', width: '100%'}}
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}

export default () => {
      
    return (
      <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          width: '100%'
      }}>
          <Search />
          hello pokemonWithPower$
      </div>
    );
}