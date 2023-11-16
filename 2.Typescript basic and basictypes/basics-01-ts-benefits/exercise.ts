/*
1) Write a TypeScript function that accepts a string as a parameter and find the longest word within the string.
For Example:
input: Write a TypeScript function
output: TypeScript
*/

function longestString(str: string) {
    let arr = str.split(' ');
    for(let i = 0; i < arr.length; i++){
        const st = arr.map((x => {
            return x.length;
        }))
        let len = Math.max(...st);
        if(len == arr[i].length) {
            return arr[i];
        }
        
    }
}

console.log(longestString('Write a TypeScript function'));

/*
2) Write two function in typescript and one of them accepts a another function as a parameter(callback function).
For example:
one function name "fun1" and second function name "fun2".
function fun1 takes first parameter as a string and second parameter as function.
like this function fun1(str, callback)
and function fun2 just print simple string like "Hello World!"
so if we call fun1("prominentpixel", fun2)
then output must be:
prominentpixel
Hello World!
*/

function fun1(str: string, callback) {
    console.log(str);
    return callback();
}

function fun2() {
    console.log("Hello World");
}

const f = fun1("prominentpixel", fun2);
console.log(f);

/*
3) Write a TypeScript function to extract unique characters from a string.
For Example: 
input: prominentpixel
output: prominetixl
*/

function uniqueCharacter(strs: string) {
    const arr = strs.split("");
    const st = new Set<string>(arr);
    const newArr: string[] = [];
    st.forEach((x) => {
        newArr.push(x);
    })
    const result = newArr.join("");
    return result;  
}
console.log(uniqueCharacter("prominentpixel"));