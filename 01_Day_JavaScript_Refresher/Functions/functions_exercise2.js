const printArray = (args) => {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i])
    }
}

const showDateTime = () => {
    const fullDate = new Date()
    const date = fullDate.getDate()
    const month = fullDate.getMonth()
    const year = fullDate.getFullYear()
    const time = `${fullDate.getHours()}:${fullDate.getMinutes()}`
    console.log(`${date}/${month}/${year} ${time}`)
}

function swapValues(x, y) {
    let middleValue;
    middleValue = x;
    let middleValue2 = y
    y = middleValue;
    x = middleValue2
    console.log(x,y)
}

const arrayReverser = (oneArray) => {
    let newArray = [];
    for (let i = 0; i < oneArray.length; i++ ) {
        newArray.unshift(oneArray[i])
    }
    return newArray
}

const capitalizeArray = (oneArray) => {
    let newArray = [];
    for (let i = 0; i < oneArray.length; i++ ) {
        newArray.push(oneArray[i].toUpperCase())
    }
    return newArray;
}
