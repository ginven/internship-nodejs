const colors = require('colors');
// console.log('-- Without ES6 class --'.rainbow);

// function Calculator() {
//     this.val = 0;

//     this.add = function(x) {
//       this.val = this.val + x;
//       return this;
//     };
//   }


console.log('-- ES6 class --'.rainbow);
class Calculator {
    constructor() {
      this.val = 0;
    }

    // Method
    add(x) {
      this.val = this.val + x;
      return this;
    }

    multiply(x) {
        this.val = this.val * x;
        return this;
      }

    substract(x) {
        this.val = this.val - x;
        return this;
    }

    divide(x) {
        this.val = this.val / x;
        return this;
    }
  }

  let calc = new Calculator(0);
  let amount = calc.add(5).multiply(2).add(20).divide(3)
  console.log(amount.val);

  