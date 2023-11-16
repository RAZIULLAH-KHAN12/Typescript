let appId = 'abc';
const btn = document.querySelector('button')!;

function add(n1: number, n2: number) {
    if(n1 + n2 > 0) {
        return n1 + n2;
    }
    return; 
}

function clickHandler(message: string) {
    //let userName = 'Raziullah'; // error -> userName' is declared but its value is never read.
    console.log('Clicked! ' + message);
}
//check button not null
if(btn) {
    btn.addEventListener('click', clickHandler.bind(null, "You're welcome!"));    
}

//This is about map
const map = new Map<string, number>([['a',1],['b',2]]);
map.set('name',123);
console.log(map.get('name')); 
console.log(map.has('name'));

console.log(map.keys());
