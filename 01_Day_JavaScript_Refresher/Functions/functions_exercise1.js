const fullName = (firstName, lastName) => {
    return firstName + lastName
}

const addNumbers = (first, second) =>{
    return first + second
}

function calculates_areasOfCircle(pie, x, r){
    return pie * x * r
}

function convertCelciusToFahrenheit(oC) {
    const oF = (oC * 9/5) + 32
    return oF
}

const bmiCalculator = (weight, height) => {
    return bmi = weight/(height * height)
}

const bmiChecker = (weight, height) =>{
    const bmi = bmiCalculator(weight, height);
    switch(true){
        case (bmi < 18.5):
            console.log('Underweight')
            break
        case (18.5 <= bmi <= 24.9):
            console.log('Normal weight')
            break
        case (25 <= bmi <= 29.9):
            console.log('Overweight')
            break
        case (bmi >= 30):
            console.log('Obese')
            break
        default:
            console.log('Invalid')

    }

}

const seasonChecker = (month) => {
    switch (true){
        case (month === 11 || month === 12 || month === 1):
            return 'Winter'
        case (month === 2 || month === 3 || month === 4):
            return 'Spring'
        case (month === 5 || month === 6 || month === 7):
            return 'Summer'
        case (month === 8 || month === 9 || month === 10):
            return 'Autumn'
        default:
            console.log('Invalid')
    }
}
