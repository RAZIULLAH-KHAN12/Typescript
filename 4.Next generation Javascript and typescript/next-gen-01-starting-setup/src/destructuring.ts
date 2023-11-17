console.log("Array Object Destructuring!");
//It does not change original array.
//It copy all the element in new constant or variables.
//It copy element in orderwise

const hobby1 = ["sports", 'Cooking', 'Reading', 'Writing'];

const [a, b, ...remainingHobbies] = hobby1;
console.log(a);
console.log(a, b, remainingHobbies);

//Object destructuring
//It does not follow order.
//It pull the element by key names
const per:{firstName: string, age1: number} = {
    firstName: 'Raziullah',
    age1: 22,
};

console.log(Object.keys(per).length);
const { firstName: userName1, age1 } = per;
console.log(userName1, age1, per);