
/**
 * Regular function
 * @param {*} name 
 */
function printMyName(name){
    console.log(name)
}

/**
 * Arrow function
 * @param {*} name 
 */
const printMyNameArrow = (name) => {
    console.log(name);
}

/**
 * Regular arrow function with return statement
 * @param {Number} number 
 */
const multiply = (number) => {
    return number * 2;
}

/**
 * Shortcut function
 * @param {Number} number 
 */
const multiplySingleStatement = (number) => number * 2;

printMyName('Kirito');
printMyNameArrow('Asuna');
console.log(multiply(4));
console.log(multiplySingleStatement(4));



