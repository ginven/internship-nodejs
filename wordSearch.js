const colors = require('colors');

const wordSearch = (w, text) => {
    if (typeof w !== 'string' || typeof text !== 'string') {
        return 'All variables must be strings'.red;
    }
    if (text.toLowerCase().split(' ').indexOf(w.toLowerCase()) > -1) {
        return `The word ${w} is present in the given text: ${text}`.green;
    } else {
        return `The word ${w} is not present in the given text: ${text}`.red;
    }
}

console.log(wordSearch('accessib', 'What is Accessibility and Why is it important for Visma and our customers? '));
console.log(wordSearch('VIsmA', 'What is Accessibility and Why is it important for Visma and our customers? '));
console.log(wordSearch('frontend', 'What is Accessibility and Why is it important for Visma and our customers? '));
console.log(wordSearch(1, 'What is Accessibility and Why is it important for Visma and our customers? '));

