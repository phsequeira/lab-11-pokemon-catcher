import { renderTableRow } from './render-table.js';
import { findByUnderscoreId } from '../utils.js';
import { clearGame, gameStats } from '../localStorageUtils.js';

const table = document.querySelector('table');
const resetGame = document.getElementById('game-reset');

const pokemonList = gameStats();
for (let item of pokemonList) {

    const pokemon = findByUnderscoreId(item._id, pokemonList);

    const tableRowDOM = renderTableRow(pokemon);

    table.append(tableRowDOM);
}

const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');

tr.append(td1, td2, td3);

table.append(tr);

resetGame.addEventListener('click', () => {
    clearGame();
    window.location = '../index.html';
});