// IMPORT MODULES under test here:
import { getRandomPokemon } from '../utils.js';


const test = QUnit.test;

test('get three random pokemon that do not match', (expect) => {
    //Arrange
    let pokeOne = getRandomPokemon();
    let pokeTwo = getRandomPokemon();
    let pokeThree = getRandomPokemon();

    while (pokeOne.id === pokeTwo.id || pokeOne.id === pokeThree.id || pokeTwo.id === pokeThree.id) {
        pokeOne = getRandomPokemon();
        pokeTwo = getRandomPokemon();
        pokeThree = getRandomPokemon();
    }
    // Set up your arguments and expectations
    const expected = pokeOne.id !== pokeTwo.id || pokeOne.id !== pokeThree.id || pokeTwo.id !== pokeThree.id;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal((pokeOne.id, pokeTwo.id, pokeThree.id), expected);
});
