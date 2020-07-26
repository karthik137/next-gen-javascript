const number = 1;
const num2 = number;

console.log(num2);


//Objects and arrays are reference types

const person = {
    name : 'Kirito'
}

//Copying the ref, This will point to person object
const secondPerson = person;

//Create copy of the object
const thirdPerson = {
    ...person
}

console.log(secondPerson);
console.log(thirdPerson);