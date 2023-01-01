import './web_techs';
import {countries} from "./countries";

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.replace(/[,.]/g, '').split(' ')

console.log(words);
console.log(words.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat')
console.log('add \'Meat\' in the beginning of your shopping cart if it has not been already added:' + shoppingCart);

shoppingCart.push('Sugar')
console.log('add Sugar at the end of you shopping cart if it has not been already added\n' + shoppingCart);

shoppingCart.splice(4,1)
console.log('remove \'Honey\' if you are allergic to honey\n' + shoppingCart);

shoppingCart[3]='Green Tea'
console.log('modify Tea to \'Green Tea\'\n' + shoppingCart);

if (countries.indexOf('Ethiopia') !== -1){
    console.log('Ethiopia')
} else {
    countries.push('Ethiopia')
}

if (webTechs.indexOf('Sass') !== -1){
    console.log('Sass is a CSS preprocess')
} else {
    webTechs.push('Sass')
    console.log(webTechs)
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
