const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

const pricePrinter = (products) => {
    products.forEach((product)=>{
        console.log(product.price)
    })
}

const productPrinter = (products) => {
    products.forEach((product) => {
        console.log(`The price of ${product.product} is ${typeof product.price === 'string' ?'unknown':product.price + ' euros'}`)
    })
}

const sumPrice = (products) => {
    let sum = 0;
    products.forEach((product) => {
        return typeof product.price === 'string' ? sum : sum = sum + product.price;
    })
    console.log(sum)
}

const priceArray = products.map((product) => {return product.price})

const productFilter = products.filter((product)=>{return typeof product.price !== 'string'})

const betterSumPrice = products.map((product) => {return product.price}).filter((price) => {return typeof price !== 'string'}).reduce((acc, cur) => acc + cur)

const reduceOnly = products.reduce((acc, cum) => {
    let price = cum.price
    return typeof price !== 'string'? acc+price : acc
},0)

products.find((product)=> typeof product.price==='string')
products.findIndex((product)=>typeof product.price==='string')
products.some((product)=>typeof product.price!== 'number')
products.every((product)=> typeof product.price === 'number')
