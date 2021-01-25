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
function renderPokeImage(pokemonItem) {
    const image = document.createElement('img');
    image.className = 'poke-img';
    image.src = pokemonItem.url_image;
    return image;
}
export function setThreePokemon() {
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

    const div = document.getElementById('poke-div');
    div.append(img1, img2, img3);
}