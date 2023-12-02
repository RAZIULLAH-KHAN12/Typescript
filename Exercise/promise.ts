let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("The First Promise resolve");
        resolve(10);
    }, 1*1000);
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("The Second Promise resolve");
        resolve(20);
    }, 2*1000);
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("The Third Promise resolve");
        resolve(30);
    }, 3*1000);
});
let total: any = 0
Promise.all([p1, p2, p3]).then(result=> {
    for (let i in result) {
        total += result[i];
    }
    console.log(`Total: ${total}`);
}).catch(err=> {
    console.log(`Error: ${err}`);
})