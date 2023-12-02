/*1) Print the number after the seconds using promise(also number is value of second), i.e arr = [2,4,1,3]  Print 2 after 2 sec, than print 4 after next 4 sec,...   */

const arr: number[] = [2,4,1,3];
var delay: number = 1000;

for(let i = 0; i<arr.length; i++) {
    const promise = new Promise<number>((resolve,reject) => {
        setTimeout(() => {
            return resolve(arr[i]);
        },delay*arr[i]);
    });
    promise.then((data) => {
        console.log(data);
    }).catch((er) => {
        console.log(er);
    })
}