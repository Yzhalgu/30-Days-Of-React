/*
'for' loop is used when we know how many iteration we go.
'while' loop is used when we do not know how many iteration we go in advance.
'do while' loop run at least once if the condition is true or false.
 */

// for of, If we are not interested in the index of the array
const numbers = [1, 2, 3, 4, 5]
for (const number of numbers){
    console.log(number)
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
for (const country of countries) {
    console.log(country.toUpperCase())
}

// forEach, If we are interested in the index of the array
// The forEach array method takes a callback function, the callback function takes three arguments: the item, the index and the array itself.
const numbers2 = [1,2,3,4,5]
numbers2.forEach((number, i) => {
    console.log(number, i)
})

const countries2 = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
countries2.forEach((country,i) => {
    console.log(i, country.toUpperCase())
})

// for in, can be used with object literals to get the keys of the object
const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
}

for (const key in user) {
    console.log(key, user[key])
}

/*
'break', is used to interrupt a loop
'continue', is used to skip a certain iterations
 */
for (let i = 0; i <= 5; i++) {
    if (i === 3) {
        break
    }
    console.log(i)
}

// 0 1 2

for (let i = 0; i <= 5; i++) {
    if (i === 3) {
        continue
    }
    console.log(i)
}
// 0 1 2 4 5
