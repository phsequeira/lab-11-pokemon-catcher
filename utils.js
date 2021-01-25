import pokemon from './data.js';

export function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemon.length);

    return pokemon[randomIndex];
}
function findById(array, id) {
    for (let item of array) {
        if (item.pokemon === id) return item;
    }
}
