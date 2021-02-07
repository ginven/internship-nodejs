let report = {
    totalCalls: 0
}

const spy = func => {

    let wrapped = () => {
        func()
        report.totalCalls++
    }

    wrapped.report = function() {
        return report
    }

    return wrapped
}


const myFunction = () => {
    console.log('I\'m a simple function');
}

let spied = spy(myFunction);
spied(1)
spied(3)
spied(5)


console.log(spied.report())

