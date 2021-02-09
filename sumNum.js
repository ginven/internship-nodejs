const colors = require('colors');

const sumNum = x => {
    return function addOther(y){
        if (typeof x !== 'number' || typeof y !== 'number'){
            return 'Please enter only numbers'.red
        }
        return x + y;
}}

console.log(sumNum(2)(6));
console.log(sumNum('2')(6));
console.log(sumNum(6));