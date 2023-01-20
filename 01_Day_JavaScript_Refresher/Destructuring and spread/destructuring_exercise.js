const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}
const gerPersonInfo = (person) => {
    const {firstName, lastName, age, country, job, skills} = person
    console.log(`${lastName} ${firstName} lives in ${country}. He is ${age} years old. He is an ${job}.`)
    console.log(`He teaches ${[...skills]}`)
}
