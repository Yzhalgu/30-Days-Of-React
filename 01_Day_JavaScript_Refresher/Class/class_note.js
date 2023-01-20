/*
Once we create a class we can create object from it whenever we want. Creating an object from a class is called class instantiation.
Defining a classes
To define a class in JavaScript we need the keyword class , the name of a class in CamelCase and block code(two curly brackets).
Let us create a class name Person.

Instantiation class means creating an object from a class. We need the keyword new and we call the name of the class after the word new.

Class Constructor
The constructor is a builtin function which allows as to create a blueprint for our object.
The constructor function starts with a keyword constructor followed by a parenthesis.
Inside the parenthesis we pass the properties of the object as parameter. We use the this keyword to attach the constructor parameters with the class.

When ever we instantiate we should pass the value of the properties. Let us pass value at this time when we instantiate the class.
 */
class Person {
    constructor(firstname, lastname, age, country, gender) {
        console.log(this);
        this.firstname = firstname
        this.lastname = lastname
        this.age = age;
        this.country = country
        this.gender = gender
    }
}

const person = new Person('Gin', 'Monro')
console.log(person)


/*
Default values with constructor
The constructor function properties may have a default value like other regular functions.
 */

class PersonTwo {
    constructor(
        firstName = 'Asabeneh',
        lastName = 'Yetayeh',
        age = 250,
        country = 'Finland',
        city = 'Helsinki'
    ) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName
    }
}

const person1 = new PersonTwo() // it will take the default values
const person2 = new PersonTwo('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1)
console.log(person2)
console.log(person1.getFullName())
console.log(person2.getFullName())


/*
Properties with initial value
When we create a class for some properties we may have an initial value. For instance if you are playing a game, you starting score will be zero.
So, we may have a starting score or score which is zero. In other way, we may have an initial skill and we will acquire some skill after some time.
 */
class Person3 {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
}

const person31 = new Person3('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person32 = new Person3('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person31.score)
console.log(person32.score)

console.log(person31.skills)
console.log(person32.skills)

/*
getter
The get method allow us to access value from the object.
We write a get method using keyword get followed by a function.
Instead of accessing properties directly from the object we use getter to get the value. See the example bellow
 */
class Person4 {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `He knows ${skills}` : ''

        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
}

const person41 = new Person4('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person42 = new Person4('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person41.getScore())
console.log(person42.getScore())

console.log(person41.getSkills())
console.log(person42.getSkills())

/*
Static method
The static keyword defines a static method for a class. Static methods are not called on instances of the class.
Instead, they are called on the class itself. These are often utility functions, such as functions to create or clone objects. An example of static method is Date.now().
The now method is called directly from the class.
 */
class Person5 {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`

        let formattedSkills = skills ? `He knows ${skills}` : ''

        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
    static favoriteSkill() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }
    static showDateTime() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if (hours < 10) {
            hours = '0' + hours
        }
        if (minutes < 10) {
            minutes = '0' + minutes
        }

        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
    }
}

console.log(Person5.favoriteSkill())
console.log(Person5.showDateTime())

/*
Inheritance
Using inheritance we can access all the properties and the methods of the parent class. This reduces repetition of code.
If you remember, we have a Person parent class and we will create children from it. Our children class could be student, teach etc.
 */

class Student extends Person5{
    saySomething() {
        console.log('I am a child of the person class')
    }
}
const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
console.log(s1)
console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())
