import {countries} from "./countries";

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort()
console.log('Sorting array in ascending order ' + ages)
// min
const minValue = Math.min(...ages)
console.log('Min value = ' + minValue)

// max
const maxValue = Math.max(...ages)
console.log('Max value = ' + maxValue)

// median
const median = ages.length%2
if (median !== 0){
    const index = ages.length/2-1
    console.log('Median value = ' + ages[index])
} else {
    const index = Math.floor(ages.length/2)
    console.log('Median value = ' + ages[index] + ages[index+1])
}

// sum
const averageValue = ages.reduce((a,b)=>{return a+b})/ages.length
console.log('Average value = ' + averageValue)

// range of the ages
console.log(maxValue-minValue)

// compare min-ave and max-ave and return bigger one
const min_ave = Math.abs(minValue-averageValue)
const max_ave = Math.abs(maxValue-averageValue)
console.log(min_ave>max_ave?min_ave:max_ave)

const newCountries = countries.slice(0, 10)

// middle countries
const middle = newCountries.length%2
if (middle !== 0){
    const index = newCountries.length/2-1
    console.log('middle value = ' + [index])
} else {
    const index = Math.floor(newCountries.length/2-1)
    console.log('middle value = ' + newCountries[index] + ' ' + newCountries[index+1])
}

// dividing countries array
if (newCountries.length%2 === 0){
    const first = newCountries.slice(0, newCountries.length/2)
    const second = newCountries.slice(newCountries.length/2)
    console.log('first one: ' + first + ' second one: ' + second )
} else {
    const first = newCountries.slice(0, Math.floor(newCountries.length/2)+1)
    const second = newCountries.slice(Math.floor(newCountries.length/2)+1)
    console.log('first one: ' + first + ' second one: ' + second )}
