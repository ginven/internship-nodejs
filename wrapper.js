let totalCalls = 0

const spy = func => {

    let wrapped = (num) => {
        func(num)
        totalCalls++
    }

    wrapped.report = function() {
        return {totalCalls}
    }

    return wrapped
}


const myFunction = (num) => {
    console.log('I\'m a simple function', num);
}

let spied = spy(myFunction);
spied(1)
spied(3)
spied(5)


console.log(spied.report())

