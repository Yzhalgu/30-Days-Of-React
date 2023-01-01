/*
Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
 */

const grade = prompt('enter score:')
switch (true){
    case (80<=grade && grade<=100):
        console.log('A')
        break
    case(70<=grade && grade<=89):
        console.log('B')
        break
    case(60<=grade && grade<=69):
        console.log('C')
        break
    case(50<=grade && grade<=50):
        console.log('D')
        break
    case(0<=grade && grade<=49):
        console.log('F')
        break
    default:
        console.log('score not valid')
}

/*
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
 */
const autumn = ['september', 'october', 'november']
const winter = ['december', 'january', 'february']
const spring = ['march', 'april', 'may']
const summer = ['june', 'july', 'august']
const season = prompt('enter month:')
const month = season.toLowerCase()
switch (true){
    case (autumn.indexOf(month)!==-1):
        console.log('autumn')
        break
    case (winter.indexOf(month)!==-1):
        console.log('winter')
        break
    case (summer.indexOf(month)!==-1):
        console.log('summer')
        break
    case (spring.indexOf(month)!==-1):
        console.log('spring')
        break
    default:
        console.log('Unrecognized month')
}

/*
Check if a day is weekend day or a working day. Your script will take day as an input.
 */
const weekend = ['saturday', 'sunday']
const workingDay = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
const inputDay = prompt('What is the dat today?')
const day = inputDay.toLowerCase()
if (weekend.indexOf(day)!==-1){
    console.log(`${day} is a weekend`)
} else if (workingDay.indexOf(day)!==-1){
    console.log(`${day} is a working day`)
} else {
    console.log('Input not valid')
}
