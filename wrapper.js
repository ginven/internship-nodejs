

const spy = func => {
    let totalCalls = 0;
    let calls = func => {
        func()
        totalCalls++
    }
    calls(func)
    return totalCalls
}

const myFunction = () => {
    console.log('I\'m a simple function');
}


// Example:
// var spied = spy(myFunction);
// spied(1);
// var report = spied.report(); // returns { totalCalls: 1 }


