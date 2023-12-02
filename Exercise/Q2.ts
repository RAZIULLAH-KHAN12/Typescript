/*2) From the array of 10 promise, if any 2 promise are Rejected then output should be combination of the error message of both ,the promise after all the promise are resolved(Prmoise should be executed one after one).  */

let arrPromise: Promise<any>[] = [];
let errorMessages: string[] = [];

for (let i = 0; i < 10; i++) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (i < 2) {
        errorMessages.push("Error in Promise " + i);
        reject("Error in Promise " + i);
      } else {
        resolve("Promise " + i);
      }
    }, 1000 * i); 
  });
  arrPromise.push(promise);
}

let rejectedCount = 0;

Promise.allSettled(arrPromise)
  .then((results) => {
    for (const result of results) {
      if (result.status === 'rejected') {
        rejectedCount++;
        if (rejectedCount === 2) {
          console.log(errorMessages.join(', '));
          break;
        }
      }
    }

    if (rejectedCount < 2) {
      console.log("All promises resolved successfully.");
    }
  });

  


