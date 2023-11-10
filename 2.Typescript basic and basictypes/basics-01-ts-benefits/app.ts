console.log("Unknown type");

//we don't what user entered like number string boolean
let userInput: unknown;
let userName: string;

//any is more flexible type in typescript, it basically disable all type checking
userInput = 5;
userInput = 'Max';
if( typeof userInput === 'string'){
    userName = userInput;
}
//unknown is check first what we store in userInput


// let something: void = null;
// let nothing: never = null; //-- get error

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('An error occured!', 500);

// function keepProcessing(): never { 
//     while (true) { 
//  console.log('I always does something and never ends.')
// }
// }


