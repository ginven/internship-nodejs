let totalCalls = 0;

const spy = func => {
    return function(x) {
        func()
        totalCalls++
        return {
			report: function() {
            return totalCalls
        }
		}
    }
}


const myFunction = () => {
    console.log('I\'m a simple function');
}

let spied = spy(myFunction);
spied(1)

console.log(spied)

// let report = spied.report();
// console.log(report)


// let report = spied(1).report()
// console.log(report);

// Example:
// var spied = spy(myFunction);
// spied(1);
// var report = spied.report(); // returns { totalCalls: 1 }


