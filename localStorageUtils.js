import { findByUnderscoreId } from './utils.js';

const POKEMON = 'POKEMON';
const defaultEmptyGame = [];

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

export function incrementSeen(_id) {
    const stats = gameStats();
    const pokemon = findByUnderscoreId(_id, stats);

    if (!pokemon) {
        const newStat = {
            _id: _id,
            seen: 1,
            caught: 0,
        };

        stats.push(newStat);
    } else {
        pokemon.seen++;
    }

    setGameStats(stats);
}

export function incrementCaught(_id) {
    const stats = gameStats();
    const pokemon = findByUnderscoreId(_id, stats);
    pokemon.caught++;

    setGameStats(stats);
}
export function clearGame() {
    const stringydefaultGame = JSON.stringify(defaultEmptyGame);
    
    localStorage.setItem(POKEMON, stringydefaultGame);
}
