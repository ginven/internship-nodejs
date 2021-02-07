const colors = require('colors')

const coloredHashtag = [
    colors.green('#'),
    colors.red('#'),
    colors.blue('#'),
    colors.yellow('#')
]

let previous;

for(let i = 1; i < 8; i++) {
    let randNum = Math.floor(Math.random() * 3)

    if (randNum === previous) {
        randNum = 3
    }

    previous = randNum;

    let randColor = coloredHashtag[randNum]
    console.log(randColor.repeat(i));
   
}
