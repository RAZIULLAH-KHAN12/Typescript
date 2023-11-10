console.log("Special types in Typescripts")

// any is a type that disables type checking and effectively allows all types to be used.

let u = true;
// u = "hello";  //get error -->Type 'string' is not assignable to type 'boolean'.

let a: any = true;
let b: any = "Raziullah";
a = "Hello";
a = 50;
console.log(a);
console.log(Math.round(b));  //NaN

let activities: any[];
activities = ['Sports', 50, true, {name: "Raziullah", age: 21}, [10, 'Apple', 'Bird']];
console.log(activities);
activities[4][2];
activities[3].name;

//fallback of any Typescript compiler not ckeck type.
// but TypeScript will not be able provide type safety
//such as auto completion, will not work. 
//Remember, it should be avoided at "any" cost...


