console.log("Function Overloading!");

type A = string | number;
type B = string | number;

type C = A & B;

function add1(a: number, b: number): number;
function add1(a: string, b: string): string;
function add1(a: string, b: number): string;
function add1(a: number, b: string): string;
function add1 (a: C, b: C) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add1(10, '5');  //function overloading ke case me hame exact return type pta chal jata h
const result1 = add1(10, 5);
const result2 = add1('Hello', "World");
console.log(result);

