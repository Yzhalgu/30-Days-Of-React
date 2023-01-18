/*
Function with unlimited number of parameters
Sometimes we do not know how many arguments the user going to pass.
Therefore, we should know how to write a function which can take unlimited number of arguments.
The way we do it has a significant difference between a function declaration(regular function) and arrow function.
Let us see examples both in function declaration and arrow function.

Unlimited number of parameters in regular function
A function declaration provides a function scoped arguments array like object.
Any thing we passed as argument in the function can be accessed from arguments object inside the functions. Let us see an example
 */
// Let us access the arguments object
function sumAllNums() {
    console.log(arguments)
}

sumAllNums(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// function declaration
function sumAllNums2() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

console.log(sumAllNums2(1, 2, 3, 4)) // 10
console.log(sumAllNums2(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums2(15, 20, 30, 25, 10, 33, 40))  // 173

/*
Unlimited number of parameters in arrow function
Arrow function does not have the function scoped arguments object.
To implement a function which takes unlimited number of arguments in an arrow function we use spread operator followed by any parameter name.
Any thing we passed as argument in the function can be accessed as array in the arrow function. Let us see an example
 */

// Let us access the arguments object
const sumAllNums3 = (...args) => {
    // console.log(arguments), arguments object not found in arrow function
    // instead we use an a parameter followed by spread operator
    console.log(args)
}

sumAllNums3(1, 2, 3, 4)
// [1, 2, 3, 4]
