// creating an empty object
const person = {}

// creating an object with value
const personWithValue = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js',
    ],
    isMarried: true,
}
console.log(personWithValue)

// getting values from an object
// using .followed by key name if the key-name is a one word
// using square bracket and a quote
const person3 = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js',
    ],
    getFullName: function () {
        return `${this.firstName}${this.lastName}`
    },
    'phone number': '+3584545454545',
}
console.log(person3.firstName)
console.log(person3.lastName)
console.log(person3.age)
console.log(person3['location'])
console.log(person3['skills'])

/*
Creating object methods
the person object has getFullName properties. the getFullName is function inside the person object and we call it an object method
the this key word refers to the object itself. we can use the word this to access the values of different properties of the object.
we can not use an arrow function as object method because the word this refers to the window inside an arrow function instead of the object itself.
 */
const person4 = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js',
    ],
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
}

console.log(person.getFullName())
// Asabeneh Yetayeh

// setting a new keys in an object
const person5 = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js',
    ],
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
}
person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true
person.getPersonInfo = function () {
    let skillsWithoutLastSkill = this.skills
        .slice(0, this.skills.length - 1)
        .join(', ')
    let lastSkill = this.skills.slice(this.skills.length - 1)[0]

    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
}
console.log(person)
console.log(person.getPersonInfo())

/*
Object methods
Object.assign: to copy an object without modifying the original object
 */
const person6 = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
        street: 'Heitamienkatu 16',
        pobox: 2002,
        city: 'Helsinki',
    },
    getPersonInfo: function () {
        return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    },
}

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty
const copyPerson6 = Object.assign({}, person6)
console.log(copyPerson6)

// getting object keys using Object.keys()

const keys = Object.keys(copyPerson6)
console.log(keys)
const address = Object.keys(copyPerson6.address)
console.log(address)

// getting object values using Object.values()
const values = Object.values(copyPerson6)
console.log(values)

// getting object keys and values using Object.entries()
const entries = Object.entries(copyPerson6)
console.log(entries)

// checking properties using hasOwnProperty(0
console.log(copyPerson6.hasOwnProperty('name'))
console.log(copyPerson6.hasOwnProperty('score'))
