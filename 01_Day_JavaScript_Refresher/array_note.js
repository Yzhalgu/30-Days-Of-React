// Creating an empty array using array constructor
const arr = Array();
console.log(arr);

// Creating an empty array using square brackets
const anotherArr = [];
console.log(anotherArr)

// Creating an array with values
const numbers = [1, 3, 4, 5, 2, 345];
const fruits = ['banana', 'strawberry', 'watermelon'];
const vegetables = ['carrot', 'lettuce', 'cabbage'];

// Array with initial values. We use length property to find the length of an array
console.log(fruits.length);
console.log(numbers.length);

// Array can have items of different data types
const arrCombination = [
    'this is a string',
    12,
    true,
    {
        name: 'Gin',
        age: '29',
        gender: 'female'
    },
    {
        skills: ['HTML', 'CSS', 'React']
    }
]
console.log(arrCombination)

// Creating an array using split
// We can split a string at different positions and change it to an array
const js = 'JavaScript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript);
/* the result should be ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']*/

const companiesString = 'Facebook, ThoughtWorks, DigiCert';
const companies = companiesString.split(',')
console.log(companies)
/* the result should be ['Facebook', 'ThoughtWorks', 'DigiCert']*/

// Accessing array items using index
const animals = ['dog', 'cat', 'rabbit']
const firstAnimal = animals[0];
console.log(firstAnimal)
/* the result should be 'dog'*/

// Modifying array element
const lyrics = ['feel like flying', 'if you love me dont let go', 'ohohohoho']
lyrics[0] = 'little unsteady'
lyrics[1] = 'hold on to me'
console.log(lyrics)
/* the result should be ['little unsteady', 'hold on to me', 'ohohohoh']*/

// Methods to manipulate array
// Some of the available methods to deal with arrays: Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift
const manipulatedArr = Array() // creates an empty array
const eightEmptyValues = Array(8) // creates an eight empty values array


// Creating static values with fill
// fill: fill all the array elements with a static value
const emptyArray = Array();
const eightXValue = Array(8).fill('X');
const eight0values= Array(8).fill(0);

// Concatenating array using concat
// concat: to concatenate two arrays
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList); // [1, 2, 3, 4, 5, 6]

// Getting array length
// length: to know the size of the array
const sixNumbers = [1, 2, 3, 4, 5, 6]
console.log(sixNumbers.length) // 6

// Getting index of an element in an array
// indexOf: to check if an item exist in an array. If it exists it returns the index else it returns -1
const fiveNumbers = [1, 2, 3, 4, 5]
console.log(fiveNumbers.indexOf(3)) // 4

// Check an element if it exist in an array
const newFruits = ['banana', 'apple', 'pear', 'mango']
const index = newFruits.indexOf('banana') // 0
if(index !== -1){
    console.log('This fruit does exist in the array!')
} else {
    console.log('This fruit does not exist in the array!')
}

// ======================================================================
index !== -1 ? console.log('this fruit does exist in this array') : console.log('this fruit does not exist in this array')

// Getting last index of an element in array
// lastIndexOf: it gives the position of the last item in the array. if it exist, it returns the index else it returns -1
const sevenNumbers = [1, 3, 5, 46, 67, 1, 2]
console.log(sevenNumbers.lastIndexOf(3)) // 1
console.log(sevenNumbers.lastIndexOf(1)) // 5
console.log(sevenNumbers.lastIndexOf(44)) // -1

//includes: to check if an item exist in an array. if it exist it returns the true else it returns false
const anotherNumber = [2, 34, 2345, 33, 12, 3, 6]
console.log(anotherNumber.includes(34)) // true
console.log(anotherNumber.includes(9292)) // false

// Checking array
// Array.isArray: to check if the data types is an array
const numbers1 = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers1)) // true
const random = 100
console.log(Array.isArray(random)) // false

// Converting array to string
// toString: converts array to string
const random2 = [1, 2, 3, 4, 5, 6]
console.log(random2.toString()) // 1,2,3,4,5

// Joining array elements
// join: it is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string.
// By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.
const randomNumber = [2, 3, 4, 5, 6]
console.log(randomNumber.join()) // 2,3,4,5,6
const names = ['LILI', 'William', 'Gingin', 'Rose']
console.log(names.join()) // LILI, William, Gingin, Rose
console.log(names.join('')) // LILIWilliamGinginRose
console.log(names.join(' ')) // LILI William Gingin Rose
console.log(names.join(', ')) // LILI, William, Gingin, Rose

// Slicing array element
// slice: to cut out a multiple items in range. it takes two parameters: starting and ending position. It doesn't include the ending position
const numbersAgain = [1, 2, 3, 4, 5]
console.log(numbersAgain.slice()) // copies all element
console.log(numbersAgain.slice(0)) // copies all element
console.log(numbersAgain.slice(0, numbersAgain.length)) // copies all element
console.log(numbersAgain.slice(1,4)) // [2,3,4]

// Splicing method in array
// splice: it takes three parameters: starting position, number of times to be removed and number of items to be added
const moreNumbers = [1,2,3,4,5,6]
console.log(moreNumbers.splice()) // removes all items
console.log(moreNumbers.splice(0,1)) // remove the first item)
console.log(moreNumbers.splice(3,3,7,8,9)) // [1, 2, 3, 7, 8, 9]

// Adding item to an array using push
// push: adding item in the end. to add item to the end of an existing array we use the push method.

const arr12 = ['item1', 'item2', 'item3']
arr12.push('item4')
console.log(arr12) // ['item1', 'item2', 'item3', 'item 4']
arr12.pop() // remove one item from the end
console.log(arr12) // ['item1', 'item2', 'item3']

// Removing an element from the beginning
// shift: removing one array element in the beginning of the array
const what = [1, 2, 3, 4, 5]
what.shift() // remove one item from the beginning
console.log(what) // [2, 3, 4, 5]

// Adding an element from the beginning
// unshift: adding array element in the beginning of the array
const why = [1, 2, 3, 4, 5]
why.unshift(0)
console.log(why) // [0, 1, 2, 3, 4, 5]

//Reversing array order
// reverse: reverse the order of an array
const reversing = [1, 2, 3, 4, 5, 6, 7]
reversing.reverse()
console.log(reversing) // [7, 6, 5, 4, 3, 2, 1]

// Sorting elements in array
// sort: arrange array elements in ascending order. Sort takes a call back function.
const webTechs = [
    'CSS',
    'HWML',
    'VUE',
    'React',
    'webpack'
]
webTechs.sort()
console.log(webTechs) // ['CSS', 'HTML', 'React', 'VUE', 'wbepack]

// Arrays of arrays
// array can store different data types including an array itself.
const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]
const arrayOfArray = [
    [1, 2, 3],
    [1, 2, 3]
]
console.log(arrayOfArray[0]) // [1, 2, 3]
