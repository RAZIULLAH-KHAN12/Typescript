//Aliases and Interfaces allows types to be easily shared between different variables/objects.

// Type Aliases allow defining types with a custom name (an Alias).

//Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

// type CarYear = number;
// type CarType = string;
// type CarModel = string;
// type Car = {
//   year: CarYear,
//   type: CarType,
//   model: CarModel
// };

// const carYear: CarYear = 2001
// const carType: CarType = "Toyota"
// const carModel: CarModel = "Corolla"
// const car: Car = {
//   year: carYear,
//   type: carType,
//   model: carModel
// };

// console.log(car);

//example 2

//this is problem code repeatation
// let a1 : string | number | undefined;
// let b1 : string | number | undefined;
// let c2 : string | number | undefined;

//solution
type sol = string | number | undefined;
let aa: sol = 10;
let bb: sol = 10;
let cc: sol = undefined;

//example 3 --> type alias with function
type Users = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUsers(user: Users): Users {
    return {name: `${user.name}`, email: `${user.email}`, isActive: true};
    
}

console.log(createUsers({name: 'Raziullah', email: 'raziullah@gmail.com', isActive: true}));

//Type alias object types
// type User1 = { name: string; age: number };
// const u1: User1 = { name: 'Max', age: 30 }; // this works!
// console.log(u1);


//with function

// For example, you can simplify this code:

// function greet(user: { name: string; age: number }) {
//   console.log('Hi, I am ' + user.name);
// }

// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }
// To:

// type User = { name: string; age: number };

// function greet(user: User) {
//     console.log('Hi, I am ' + user.name);
//   }
  
//   function isOlder(user: User, checkAge: number) {
//     return checkAge > user.age;
//   }
  






