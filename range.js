const colors = require('colors');


console.log('--Without ES6 methods--'.green);

function range(x, y) {
    if (x > y) {
        return console.log('First value must be less than or equal to second.'.red);
    }
    var arr = [];
    for (var i = x; i < y; i++) {
        arr.push(i);
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
    if (x > y) {
        return console.log('First value must be less than or equal to second.'.red);
    }
    let arr = [];
    for (let i = x; i < y; i++) {
        arr.push(i);
    }
    console.log(arr);
}

rangeTwo(1, 5);
rangeTwo(5, 5);
rangeTwo(16, 20);
rangeTwo(20, 2);
rangeTwo(-2, 2)