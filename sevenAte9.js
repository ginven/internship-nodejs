const colors = require('colors');

const sevenAte9 = num => {
    if (typeof num !== 'string' && typeof num !== 'number'){
        return 'Please insert string or a number value.'.red
    }
    while(num.toString().includes('797')){
        num = num.toString().replace('797', '77');
    }
    return num;
}

console.log(sevenAte9('79712312'));
console.log(sevenAte9('797979'));
console.log(sevenAte9(7979797));
console.log(sevenAte9(['797']));