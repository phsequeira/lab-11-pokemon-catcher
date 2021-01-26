// IMPORT MODULES under test here:
import { getSeenArray, getCaughtArray, getIdArray } from '../results/results-utils.js';
import { getRandomPokemon } from '../utils.js';


const test = QUnit.test;

const localStats = [
    { _id: 'caterpie', seen: 2, caught: 0 },
    { _id: 'charmeleon', seen: 4, caught: 1 },
    { _id: 'charmander', seen: 2, caught: 1 },
    { _id: 'kakuna', seen: 3, caught: 2 },
    { _id: 'bulbasaur', seen: 2, caught: 0 },
    { _id: 'pidgey', seen: 3, caught: 1 },
];

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

        return pokeOne.id !== pokeTwo.id || pokeOne.id !== pokeThree.id || pokeTwo.id !== pokeThree.id;
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

test('getSeenArray should take in localStats and return an array of numbers', (expect) => {
    //Arrange

    // Set up your arguments and expectations
    const expected = [2, 4, 2, 3, 2, 3];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSeenArray(localStats);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('getCaughtArray should take in localStats and return an array of numbers', (expect) => {
    //Arrange

    // Set up your arguments and expectations
    const expected = [0, 1, 1, 2, 0, 1];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getCaughtArray(localStats);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('getIdArray should take in localStats and return an array of string', (expect) => {
    //Arrange

    // Set up your arguments and expectations
    const expected = ['caterpie', 'charmeleon', 'charmander', 'kakuna', 'bulbasaur', 'pidgey'];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getIdArray(localStats);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});