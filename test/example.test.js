// IMPORT MODULES under test here:
import { getRandomPokemon } from '../utils.js';


const test = QUnit.test;

test('get three random pokemon that do not match', (expect) => {
    //Arrange
    let pokeOne = getRandomPokemon();
    let pokeTwo = getRandomPokemon();
    let pokeThree = getRandomPokemon();

    function setThreePokemon() {
        while (pokeOne.id === pokeTwo.id || pokeOne.id === pokeThree.id || pokeTwo.id === pokeThree.id) {
            pokeOne = getRandomPokemon();
            pokeTwo = getRandomPokemon();
            pokeThree = getRandomPokemon();
        }
        return pokeOne.id, pokeTwo.id, pokeThree.id;
    }
    // Set up your arguments and expectations
    const expected = pokeOne.id !== pokeTwo.id || pokeOne.id !== pokeThree.id || pokeTwo.id !== pokeThree.id;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = setThreePokemon();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
