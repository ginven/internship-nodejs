const colors = require('colors');

var houses = [
    {name: "Targaryen", motto: "Fire and Blood"},
    {name: "Stark", motto: "Winter is Coming"},
    {name: "Bolton", motto: "Our Blades Are Sharp"},
    {name: "Greyjoy", motto: "We Do Not Sow"},
    {name: "Tully", motto: "Family, Duty, Honor"},
    {name: "Arryn", motto: "As High as Honor"},
    {name: "Lannister", motto: "Hear Me Roar!"},
    {name: "Tyrell", motto: "Growing Strong"},
    {name: "Baratheon", motto: "Ours is the Fury"},
    {name: "Martell", motto: "Unbowed, Unbent, Unbroken"}
]

console.log('--Without ES6 methods--'.green);

function motto(house) {
    if (houses.filter(el => el.name === house).length === 0){
        return console.log('There are no such house!'.red)
    }
    for(var i = 0; i < houses.length; i++){
        if(houses[i].name === house){
            return console.log(houses[i].motto);
        }
    }
    // houses.forEach(function(el, i){
    //     if(el.name === house){
    //         return console.log(el.motto);
    //     }
    // })
}

motto('Bolton');
motto('Baratheon');
motto('Barat');
motto(1)


console.log('--With ES6 methods--'.green);

const mottoTwo = house => {
    if (houses.every(e => e.name !== house)) {
        return console.log('There are no such house!'.red)
      }
    houses.find(el => {
        if(el.name === house){
            return console.log(el.motto);
        }
    })
} 

mottoTwo('Bolton');
mottoTwo('Baratheon');
mottoTwo('Barat');