const colors = require('colors');
console.log('-- Without ES6 class --'.rainbow);


// function Calculate () {
//   this.value = 0;
//   this.add = function (x) {
//     return this.value + x;
//   };
//   this.substract = function (x) {
//     return this.value - x;
//   };
// }

function Calculate() { }

Calculate.prototype.value = 0;
Calculate.prototype.add = function (x) {
  this.value = this.value + x;
  return this;
};
Calculate.prototype.substract = function (x) {
  this.value = this.value - x;
  return this;
};
Calculate.prototype.multiply = function (x) {
  this.value = this.value * x;
  return this;
};
Calculate.prototype.divide = function (x) {
  this.value = this.value / x;
  return this;
};

var calculate = new Calculate(0);
let result = calculate.add(5).multiply(2).add(20).divide(3)
console.log(result.value);

console.log('-- ES6 class --'.rainbow);
class Calculator {
  constructor() {
    this.val = 0;
  }

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

