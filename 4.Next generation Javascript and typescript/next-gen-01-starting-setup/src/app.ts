//1.let const var

const userName =  "Raziullah";
// userName = "Khan";
let age = 30;

age = 29;

//var is global and functional
// function add(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }

// console.log(result);

  
// if(age > 20) {
//     let isOld = true; //'isOld' is declared but its value is never read
// }
// console.log(isOld) //Cannot find name 'isOld'

//2.Arrow Function

const add = (a: number = 1, b: number = 1) => a + b;

const printOutput: (a: number | string) => void = output  => console.log(output);

const button = document.querySelector('button');
if(button){
    button?.addEventListener('click', event => {
        console.log(event);
    });
}

printOutput(add(5));


