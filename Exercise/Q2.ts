/*2) From the array of 10 promise, if any 2 promise are Rejected then output should be combination of the error message of both ,the promise after all the promise are resolved(Prmoise should be executed one after one).  */

let errorMessages: PromiseRejectedResult[] = [];
const arrPromise: Promise<any>[] = [];

const promise1 = new Promise((res, rej) => res("success1"));
arrPromise.push(promise1);
const promise2 = new Promise((res, rej) => res("success2"));
arrPromise.push(promise2);
const promise3 = new Promise((res, rej) => res("success3"));
arrPromise.push(promise3);
const promise4 = new Promise((res, rej) => res("success4"));
arrPromise.push(promise4);
const promise5 = new Promise((res, rej) => rej("error5"));
arrPromise.push(promise5);
const promise6 = new Promise((res, rej) => res("success6"));
arrPromise.push(promise6);
const promise7 = new Promise((res, rej) => res("success7"));
arrPromise.push(promise7);
const promise8 = new Promise((res, rej) => res("success8"));
arrPromise.push(promise8);
const promise9 = new Promise((res, rej) => rej("error9"));
arrPromise.push(promise9);
const promise10 = new Promise((res, rej) => res("success10"));
arrPromise.push(promise10);
console.log(promise9);

Promise.allSettled(arrPromise)
  .then((results) => {
    for (const result of results) {
      if (result.status === 'rejected') {
        errorMessages.push(result.reason);
        if (errorMessages.length === 2) {
          console.log(errorMessages.join(', '));
          break;
        }
      }
    }

    if (errorMessages.length == 0) {
      console.log("All promises resolved successfully.");
    }
  });

  


