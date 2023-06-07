import React, {useState, useEffect} from 'react';
import { pokemonWithPower$ } from '../store/store3.jsx'

const Search = () => {
    const [search, setSearch] = useState('');
  
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
    useEffect(() => {
        const sub = pokemonWithPower$.subscribe(console.log);
        return () => sub.unsubscribe();
    }, []);

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