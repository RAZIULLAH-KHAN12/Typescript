/*3) Which async/sync in foreach and for loop(try to break it). */

let arr1: number[] = [2, 5, 8, 9];
let sum: number = 0;

let call = (a: number, b: number) => a + b;

arr1.forEach(async (curVal) => {
  sum = await call(sum, curVal);  //0 --> means async is not work in foreach loop
  // sum =  call(sum, curVal);
});
console.log(sum);

for(let i = 0; i< 5; i++) {
    if(i==2){
        break;  //break is work in for loop after break execution of for loop is stop
    }
    console.log(arr1[i]);
}

for(let j in arr1) {
  // console.log(typeof j);  --> string, string ...
  if(+j==2) {
    break;  // break work in for in loop
  }
  console.log(arr1[j])
}

for(let k of arr1) {
  if(k == 8) {
    break;  //break is also work in for of loop
  }
  console.log(k);
}

