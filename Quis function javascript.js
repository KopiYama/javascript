function minimal(a, b) {
    if (a <= b) {
        return a;
    }
    return b;
}

function findIndex(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return i;
        }
    }
    return -1;
}

//penggunaan fungsi minimal
console.log(minimal(1, 4));
console.log(minimal(3, 2));
console.log(minimal(3, 3));

//penggunaan fungsi findIndex
console.log(findIndex([1, 2, 3, 4, 5], 3));
console.log(findIndex([1, 2, 3, 4, 5], 5)); 