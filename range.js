const colors = require('colors');


console.log('--Without ES6 methods--'.green);

function range(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number'){
        return console.log('Please insert only numbers.'.red);
    }
    var arr = [];
    if (x > y) {
        for (var i = y; i < x; i++) {
            arr.push(i);
        }
    } else {
        for (var i = x; i < y; i++) {
            arr.push(i);
        }
    }
    console.log(arr);
}

range(1, 5);
range(5, 5);
range(16, 20);
range(20, 2);
range(-2, 2)

console.log('--With ES6 methods--'.green);


const rangeTwo = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number'){
        return console.log('Please insert only numbers.'.red);
    }
    let arr = [];
    if (x > y) {
        for (let i = y; i < x; i++) {
            arr.push(i);
        }
    } else {
        for (let i = x; i < y; i++) {
            arr.push(i);
        }
    }
    console.log(arr);
}

rangeTwo(1, 5);
rangeTwo(5, 5);
rangeTwo(16, 20);
rangeTwo(20, 2);
rangeTwo(-2, 2)
rangeTwo('x', 2)