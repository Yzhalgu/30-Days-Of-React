class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }

    get getName() {
        return this.name
    }

    get getAge() {
        return this.age
    }

    get getColor() {
        return this.color
    }

    get getLegs() {
        return this.legs
    }
}

class Dog extends Animal {
    constructor(name, age, color, legs, ability) {
        super(name, age, color, legs);
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
        this.ability = 'bark'
    }

}

class Cat extends Animal {

}
