const numbers = [1,2,3];

const newNumbers = [...numbers, 4];

console.log(newNumbers);


const person = {
    name : 'Kirito'
}

const newPerson = {
    ...person,
    age: 28
}

console.log(newPerson);


//rest operator
//=== checks for type and value
const filter = (...args) => args.filter(el => el === 1);

console.log(filter(1, 2, 3));