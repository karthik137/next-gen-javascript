const numbers = [1,2,3];

// this will operate on each number in numbers array.
const doubleNumArray = numbers.map((number) => {
    return number * 2;
});

console.log(doubleNumArray);