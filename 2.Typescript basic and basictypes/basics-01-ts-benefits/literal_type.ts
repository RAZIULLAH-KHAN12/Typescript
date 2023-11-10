console.log("Literal Type in Typescript");

function combines(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text' | 'as-mix-type' // this is literal type
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  } 
//   if(resultConversion === 'as-number') {
//     return +result;
//   } else {
//     return result.toString();
//   }
  return result;
}

const combinedAges1 = combines(30, 26, "as-number");
console.log(combinedAges1); //56

const combinedStringAges1 = combines('30', '26', "as-number");
console.log(combinedStringAges1);

const combinedNames1 = combines("Raziullah ", "Khan", 'as-text');
console.log(combinedNames1); //Raziullah Khan

const c1 = combines("Raziullah ", 12, 'as-mix-type');
console.log(c1); //Raziullah 12
