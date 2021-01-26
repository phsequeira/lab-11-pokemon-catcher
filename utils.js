import pokemon from './data.js';
import { incrementCaught, incrementSeen } from './localStorageUtils.js';

let pokemonCaught = 0;

export function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemon.length);

    return pokemon[randomIndex];
}
export function findByUnderscoreId(id, array) {
    for (let item of array) {
        if (item._id === id) return item;
    }
}

function renderPokeImage(pokemon) {
    const image = document.createElement('img');
    image.className = 'poke-img';
    image.src = pokemon.url_image;

    image.addEventListener('click', () => {
        incrementCaught(pokemon.pokemon);
        if (pokemonCaught < 10){
            setThreePokemon();
        } else {
            window.location = '../results/index.html';
        }
    });
    return image;
}
export function setThreePokemon() {
    pokemonCaught++; 

    let pokeOne = getRandomPokemon();
    let pokeTwo = getRandomPokemon();
    let pokeThree = getRandomPokemon();

    while (pokeOne.id === pokeTwo.id || pokeOne.id === pokeThree.id || pokeTwo.id === pokeThree.id) {
        pokeOne = getRandomPokemon();
        pokeTwo = getRandomPokemon();
        pokeThree = getRandomPokemon();
    }

    const img1 = renderPokeImage(pokeOne);
    const img2 = renderPokeImage(pokeTwo);
    const img3 = renderPokeImage(pokeThree);

    incrementSeen(pokeOne.pokemon);
    incrementSeen(pokeTwo.pokemon);
    incrementSeen(pokeThree.pokemon);

    const div = document.getElementById('poke-div');
    div.textContent = '';
    div.append(img1, img2, img3);
}