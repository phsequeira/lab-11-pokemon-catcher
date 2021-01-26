
import { clearGame, gameStats } from '../localStorageUtils.js';
import { getCaughtArray, getIdArray, getSeenArray } from './results-utils.js';

const resetGame = document.getElementById('game-reset');

resetGame.addEventListener('click', () => {
    clearGame();
    window.location = '../index.html';
});

const pokemonList = gameStats();

const ctx = document.getElementById('chart').getContext('2d');

// eslint-disable-next-line
const myChart = new Chart(ctx, { 
    type: 'bar',
    data: {
        labels: getIdArray(pokemonList),
        datasets: [{
            label: 'Times Seen',
            data: getSeenArray(pokemonList),
            backgroundColor: 'red',
        },
        {
            label: 'Times Caught',
            data: getCaughtArray(pokemonList),
            backgroundColor: 'blue',
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    stepSize: 1
                }
            }]
        }
    }
});