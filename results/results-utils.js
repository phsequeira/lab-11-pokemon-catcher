export function getSeenArray(someArray) {
    const seenArray = [];
    
    for (let item of someArray) {
        seenArray.push(item.seen);

    }
    return seenArray;
}
export function getCaughtArray(someArray) {
    const caughtArray = [];
    
    for (let item of someArray) {
        caughtArray.push(item.caught);

    }
    return caughtArray;
}

export function getIdArray(someArray) {
    const idArray = [];
    
    for (let item of someArray) {
        idArray.push(item._id);

    }
    return idArray;
}