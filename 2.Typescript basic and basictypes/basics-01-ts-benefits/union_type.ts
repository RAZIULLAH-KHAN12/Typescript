//Occasionally, you’ll run into a library that expects a parameter to be either a number or a string. For instance, take the following function:

function combine(input1: number | string, input2: number | string | number | boolean) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges); //56

const combinedNames = combine('Raziullah ', 'Khan');
console.log(combinedNames); //Raziullah Khan

const c = combine('Raziullah ', 12);
console.log(c); //Raziullah 12