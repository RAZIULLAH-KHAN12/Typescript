// const add1 = (a, b, c, d, e) => {

// }; //instead of this we can use rest operator.

const add1 = (...rest: number[]) => {
    return rest.reduce((curResult, curValue)=> {
        return curResult + curValue;
    },0)
};

const addedNumbers = add1(5,10,8,6,4.7);
console.log(addedNumbers);

//we can use in tuple

// const add1 = (...rest: [number, number, number, number, number]) => {
//     return rest.reduce((curResult, curValue)=> {
//         return curResult + curValue;
//     },0)
// };

// const addedNumbers = add1(5,10,8,6,4.7);
// console.log(addedNumbers);