import { findByUnderscoreId } from './utils.js';
const POKEMON = 'POKEMON';

export function gameStats() {
    let stats = JSON.parse(localStorage.getItem(POKEMON));

    if (!stats) {
        stats = [];
        localStorage.setItem(POKEMON, JSON.stringify(stats));
    }
    
    return stats;
}

export function setGameStats(freshStats){
    localStorage.setItem(POKEMON, JSON.stringify(freshStats));
}

export function incrementSeen(pokemon) {
    const stats = gameStats();
    const pokemonFound = findByUnderscoreId(pokemon);

    if (!pokemonFound) {
        // eslint-disable-next-line no-unused-vars
        const newStat = {
            pokemon: pokemon,
            seen: 1,
            caught: 0,
        };
    } else {
        pokemonFound.seen++;
    }
    setGameStats(stats);
}

export function incrementCaught(pokemon) {
    const stats = gameStats();
    const pokemonFound = findByUnderscoreId(pokemon);

    pokemonFound.caught++;

    setGameStats(stats);

}