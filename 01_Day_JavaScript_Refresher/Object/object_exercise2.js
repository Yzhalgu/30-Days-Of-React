/*
Find the person who has many skills in the users object.

Count logged in users,count users having greater than equal to 50 points from the following object.

Find people who are MERN stack developer from the users object

Set your name in the users object without modifying the original users object

Get all keys or properties of users object

Get all the values of users object

Use the countries object to print a country name, capital, populations and languages.
 */


const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'MERN', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

// person with many skills name
const usersArray = Object.entries(users)
for (let i = 0; i < usersArray.length; i++) {
    if (usersArray[i][1].skills.length>1) {
        console.log(usersArray[i][0])
    }
}

// count logged in users
const getLoggedInNumber = (userArray) => {
    let loggedInUsers = 0
    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i][1].isLoggedIn) {
            loggedInUsers++
        }
    }
    console.log(loggedInUsers)
}

// greater than equal to 50 points

const getScoredUsers = (userArray) => {
    let userScoreGreaterOrEqual50 = 0
    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i][1].points >=50) {
            userScoreGreaterOrEqual50++
        }
    }
    console.log(userScoreGreaterOrEqual50)
}

// MERN developer
const getMernDeveloper = (userArray) => {
    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i][1].skills.indexOf('MERN') !== -1) {
            console.log(userArray[i][0])
        }
    }
}

// Set your name in the users object without modifying the original users object
const newUserObject = Object.assign({}, users)
newUserObject.Jialing = {}
console.log(newUserObject)

// Get all keys or properties of users object
Object.keys(newUserObject)

// Get all the values of users object
Object.values(newUserObject)
