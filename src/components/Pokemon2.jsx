import React, {useEffect} from "react";
import { pokemonWithPower$ } from '../store/store2.jsx'

export default () => {
    useEffect(() => {
        const sub = pokemonWithPower$.subscribe(console.log);
        return () => sub.unsubscribe();
    }, []);

    return <div style={{fontSize: '20px'}}>hello pokemonWithPower$</div>
}