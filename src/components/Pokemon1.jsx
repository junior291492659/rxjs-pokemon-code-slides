import React, {useEffect} from "react";
import { rawPokemon$ } from '../store/store1.jsx'

export default () => {
    useEffect(() => {
        const sub = rawPokemon$.subscribe(console.log);
        return () => sub.unsubscribe();
    }, []);

    return <div style={{fontSize: '20px'}}>hello rawPokemon$</div>
}