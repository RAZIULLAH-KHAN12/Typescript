// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
const userInputElement = document.getElementById("user-input");

if(userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi there!'
}

//Indexed properties.

interface ErrorContainer { //{ email: 'Not a valid email', username: 'Must start with a character'}
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    username: 'Must start with a character',
};

let aba: string = "email";  //we  can access dynamically using indexed type
console.log(errorBag[aba]);

