/*
Get user input using prompt(“Enter your age:”).
If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
 */
const input = prompt('Enter your age: ')
if (input>=18){
    console.log('You are old enough to drive')
} else {
    console.log(`You are left with ${18-input} years to drive.`)
}

/*
Compare the values of myAge and yourAge using if … else.
Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
 */
const myAge = 18
const yourAge = prompt('Enter your age: ')
if (yourAge>myAge) {
    console.log(`You are ${yourAge-myAge} years older than me.`)
} else {
    console.log('I am order than you.')
}

/*
If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways

using if else
ternary operator.
 */
const a = 4
const b = 3
if (a>b){
    console.log('4 is greater than 3')
} else {
    console.log('b is greater')
}

/*
Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

 */
const number = prompt('Enter a number')
if (number%2===0){
    console.log(`${number} is an ever number`)
} else {
    console.log(`${number} is an odd number`)
}
