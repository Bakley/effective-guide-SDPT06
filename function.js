function squares (x, y, z, a, c) { // a function will take parameters, they are the first variables a function will receive
    return x * y
}

// function declaration

// console.log(`Here is the res of unitS`, squares(5, 6)) // The function call will receive arguments

// function expression
const negation = function (a, b){
    if (b === undefined) return -a
    else return a - b
}

// console.log(`Here is the res of negation expression`, negation(5, 6))
// console.log(typeof(negation))

// Arrow function

const reccursion_power = (base, exponent) => {
    if (exponent === 0) {
        return 1
    } else {
        return base * reccursion_power(base, exponent - 1)
    }
}

// console.log(`Here is the res of reccursion_power`, reccursion_power(1000000000000000000, 0))
// console.log(`Here is the res of reccursion_power`, reccursion_power(5, 634))


//  2 ** 3 = 2 * 2 * 2 * 1 = 8
//  2 ** 0 = 1

function main(callBackFunction) {
    return callBackFunction()
}

console.log(main(()=>`Hello World!`))
