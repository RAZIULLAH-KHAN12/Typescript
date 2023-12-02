// import * as Promise from 'bluebird';

// // Example asynchronous function
// function asyncFunction(value: number): Promise<number> {
//     return Promise<number>((resolve: (arg1: number) => void, reject: (arg2: Error) => void) => {
//         // Simulating an asynchronous operation
//         setTimeout(() => {
//             if (value > 0) {
//                 resolve(value * 2);
//             } else {
//                 reject(new Error('Invalid value'));
//             }
//         }, 1000);
//     });
// }

// // Using the async function
// asyncFunction(5)
//     .then(result => {
//         console.log('Result:', result);
//     })
//     .catch(error => {
//         console.error('Error:', error.message);
//     });

// import * as Promise from 'bluebird';

// // Example asynchronous function
// function asyncFunction(value: number): Promise<number> {
//     return Promise.resolve(value * 2) ; // Simulating an asynchronous operation
// }

// // Using the async function
// asyncFunction(5)
//     .then(result => {
//         console.log('Result:', result);
//     })
//     .catch(error => {
//         console.error('Error:', error.message);
//     });


// export function resolve(arg0: number): Promise<number> {
//     throw new Error('Function not implemented.');
// }
    

