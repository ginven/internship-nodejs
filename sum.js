const colors = require('colors');

console.log('--Without ES6 methods--'.green);

function sum(arr) {
    if(!Array.isArray(arr)){
        return console.log('Please enter an array'.red);
    }
    function isNum(el){
        return typeof el === "number"
    }
    if(!arr.every(isNum)) {
       return console.log('Please enter an array of numbers'.red);
    }
    console.log(arr.reduce(function (acc, currVal) {
        return acc + currVal
        }, 0)); 
}

sum([0, 1, 2, 3]) 
sum([-5, 2, 1, 3]) 
sum([-5, '2', 1, 3]) 
sum('x') 

console.log('--With ES6 methods--'.green);


const sumTwo = arr => {
    if(!Array.isArray(arr)){
        return console.log('Please enter an array'.red);
    }
    if(!arr.every(el => typeof el === 'number')) {
       return console.log('Please enter an array of numbers'.red);
    }
    const reducer = (acc, currVal) => acc + currVal;
    console.log(arr.reduce(reducer));
}

sumTwo([0, 1, 2, 3]) 
sumTwo([-5, 2, 1, 3]) 
sum([-5, '2', 1, 3]) 
sum('x') 