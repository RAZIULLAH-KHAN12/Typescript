//readonly allow we not chamge size of tuple.

// let ourTuple: readonly [number, boolean, string];



//Tuples --Add by Typescript :fixed-length array
let ourTuple: [number, boolean, string];

ourTuple = [12, true, "Raziullah Khan"];
ourTuple.push("Dev");

console.log(ourTuple);

//Named tuples allow us to provide context for our values at each index. 
const graph: [x: number, y: number] = [55.2, 41.3];

//Destructuring Tuples
//Since tuples are arrays we can also destructure them.

const graph1: [number, number] = [55.2, 41.3];
const [x, y] = graph1;


console.log(x);
