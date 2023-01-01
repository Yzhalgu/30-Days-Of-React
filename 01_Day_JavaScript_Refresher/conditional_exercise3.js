/*
Write a program which tells the number of days in a month, considering leap year.
 */
const inputMonth = prompt('enter month')
const month = inputMonth.toLowerCase()
const days31 = ['january', 'march', 'may', 'july', 'august', 'october', 'december']
const days30 = ['april', 'june', 'september', 'november']
const days28 = 'february'
const currentYear = new Date().getFullYear()
const leapYear = currentYear%4

const getDaysInTheMonth = (month) => {
    switch (true){
        case (days31.indexOf(month)!==-1):
            console.log(`${month} has 31 days`)
            break
        case (days30.indexOf(month)!==-1):
            console.log(`${month} has 30 days`)
            break
        case (days28===month):
            console.log(`${month} has 28 days`)
    }
}

if (leapYear===0){
    if (days28===month){
        console.log(`${month} has 29 days`)
    } else {
        getDaysInTheMonth(month)
    }
} else {
    getDaysInTheMonth(month)
}
