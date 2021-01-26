export function renderTableRow(pokemon) {    
    const tr = document.createElement('tr');
    const typeTd = document.createElement('td');
    const seenTd = document.createElement('td');
    const caughtTd = document.createElement('td');

    typeTd.textContent = pokemon._id;
    seenTd.textContent = pokemon.seen;
    caughtTd.textContent = pokemon.caught;

    tr.append(typeTd, seenTd, caughtTd);
    
    return tr;
}