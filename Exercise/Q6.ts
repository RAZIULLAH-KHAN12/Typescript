/*6) Bluebird (want to do 100 req , perform the requests in the size of 10,10,10 asyncronously and in the batch of 10 reqest all the reqeust should be performed in syncronously mode(like complete 1, after 2, after 3,....,end 10)). solution should be scallable means for any number of request it should work." */

var Bluebird = require('bluebird');
var bluebirdPromise = new Bluebird(function (resolve:any, _reject: any): void {
   resolve("Something good happened");
  // reject("Something bad happened")
});
bluebirdPromise.then(function(data: string) {
    console.log("Response: "+data);
}).catch((err: any) =>{
    console.log(err);
})