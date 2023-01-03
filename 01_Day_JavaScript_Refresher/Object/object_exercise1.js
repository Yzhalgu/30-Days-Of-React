/*
Create an empty object called dog
Print the the dog object on the console
Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
Get name, legs, color, age and bark value from the dog object
Set new properties the dog object: breed, getDogInfo
 */

const dog = {}
console.log(dog)
dog.name = 'Dog'
dog.legs = 4
dog.color = 'brown'
dog.age = 1
dog.bark = () => {
    console.log('woof woof')
}

console.log(dog.name)
console.log(dog.age)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.bark)

dog.breed = 'idk'
dog.getDogInfo = () => {
    console.log(`this is a ${dog.breed} called ${dog.name} who's ${dog.age} years old`)
}
