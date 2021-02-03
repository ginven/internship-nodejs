const colors = require('colors');

const sumNestedArr = arr => {
    // Check if given variable is an array.
    if(!Array.isArray(arr)) {
        return 'Please insert an array'.red;
    }

    // Join arrays into one array
    let flatten = arr => [].concat.apply([], arr.map(el => Array.isArray(el) ? flatten(el) : el));
    const flattened = flatten(arr)

    // Check if every element is a number
    if (!flattened.every(el => typeof el === 'number')) {
        return 'Please insert only numbers'.red;
    }

    // Sum every element of the result.
    return flattened.reduce((acc, currVal) => acc + currVal);
}

console.log(sumNestedArr([10, 6, [4, 8], 3, [6, 5, [9]]]));
console.log(sumNestedArr(['10', 6, ['4', 8], 3, [6, 5, [9]]]));
console.log(sumNestedArr('12'));