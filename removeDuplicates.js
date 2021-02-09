const colors = require('colors');

function removeDuplicates(arr) {
    if(!Array.isArray(arr)){
        return console.log('Please enter an array'.red);
    }

    console.log(arr.filter((value, index, array) => array.indexOf(value) === index))

    // console.log([...new Set(arr)]);
}

removeDuplicates(1)
removeDuplicates([1,2,3,5,5,2])
removeDuplicates([1,2,3,'5',5,2,'a', 13,'a'])
