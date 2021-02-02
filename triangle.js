const colors = require('colors');
const hashtag = '#';

for(let i = 1; i < 8; i++) {
    if (i % 3 === 0) {
        console.log(hashtag.repeat(i).red);
    } else if (i === 2 || i === 5) {
        console.log(hashtag.repeat(i).green);
    } else {
        console.log(hashtag.repeat(i).yellow);
    }
}
