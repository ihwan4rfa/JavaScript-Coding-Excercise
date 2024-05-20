function uniqueInOrder(iterable) {
    let result = [];

    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i - 1]) {
            result.push(iterable[i]);
        }
    }

    return result;
}

console.log(uniqueInOrder('AAAAABBBBCCDDAABB'));
console.log(uniqueInOrder('ABBCccAD'));