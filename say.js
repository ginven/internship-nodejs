const colors = require('colors');

const say = x => {
    return function addOther(y){
        // if (typeof x !== 'string' || typeof y !== 'string'){
        //     return 'Please enter only strings'.red
        // }
        return x + ' ' + y;
}}

console.log(say("Hello,")("it’s me"));
console.log(say("Hello,")(7));
