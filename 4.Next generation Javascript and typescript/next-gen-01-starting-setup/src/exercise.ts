/*1) Create two arrays and two objects and concatenating those two arrays and two object using spread operator.
For example:
arr1 = [1,2,3,4]
arr2 = [1,2,5]
output: [1,2,3,4,1,2,5]

obj1 = {id:1, name:"Mohan"}
obj2 = {age: 20, country: "IND"}
output: {"id": 1, "name": "Mohan", "age": 20, "country": "IND"}
*/

const arr1 = [1,2,3,4];
const arr2 = [1,2,5];
const output = [...arr1, ...arr2];
console.log(output);

const obj1 = {id:1, name:"Mohan"};
const obj2 = {age: 20, country: "IND"};
const output1 = {...obj1, ...obj2};
console.log(output1);

/*
2) Create arrow functions which takes parameter as student's(Object) array
   1. function returns those students array whose marks is greater than 70.
   2. function returns array which contains only name of all students
   3. function returns students array with one additional field in student object. Field name is result if marks is grater than 33, student's result is "PASS" otherwise "FAIL".
Note: don't use "any" as variable type(students: any) */
const students = [
    {
        id: 1,
        name: "Mohan",
        collage: "VVP",
        marks: 60
    },
    {
        id: 2,
        name: "Rakesh",
        collage: "VVP",
        marks: 71
    },
    {
        id: 3,
        name: "Manohar",
        collage: "GECR",
        marks: 80
    },
    {
        id: 4,
        name: "Rohan",
        collage: "GECR",
        marks: 70
    },
    {
        id: 5,
        name: "Mohit",
        collage: "DARSHAN",
        marks: 31
    }
];

const greater = (students : {id: number; name: string; collage: string; marks: number}[]) => {
    const tt = students.filter((val) => val.marks > 70);
    return tt;
}

console.log(greater(students));
/*
output:
1> [
    {
        id: 2,
        name: "Rakesh",
        collage: "VVP",
        marks: 71
    },
    {
        id: 3,
        name: "Manohar",
        collage: "GECR",
        marks: 80
    }
]
*/


const names = (students: {id: number; name: string; collage: string; marks: number}[])=> {
    // const arr = []; 
    const nm = students.map((x) => (x.name));
    return nm;
}
console.log(students)
/*
2> ['Mohan', 'Rakesh', 'Manohar', 'Rohan', 'Mohit']
*/



// const extraField = (students: {id: number; name: string; collage: string; marks: number;}[])=> {
//     students.forEach(x => {
//         x.result = x.marks > 33 ? 'PASS' : 'FAIL';
//     });
// }
// console.log(extraField(students));
/*
3> [
    {
        id: 1,
        name: "Mohan",
        collage: "VVP",
        marks: 60,
        result: 'PASS'
    },
    {
        id: 2,
        name: "Rakesh",
        collage: "VVP",
        marks: 71,
        result: 'PASS'
    },
    {
        id: 3,
        name: "Manohar",
        collage: "GECR",
        marks: 80,
        result: 'PASS'
    },
    {
        id: 4,
        name: "Rohan",
        collage: "GECR",
        marks: 70,
        result: 'PASS'
    },
    {
        id: 5,
        name: "Mohit",
        collage: "DARSHAN",
        marks: 31
        result: 'FAIL'
    }
];
*/

/*
3) Write a function called calculateSalePriceAndTotals() which returns an array with new two new keys (salePrice and total). The key 'salePrice' equals the calculated sale price based on the original price and the discount. The key 'total' equals the computed total based on stock, the original price and the discount.
Note: must use object Destructuring in function calculateSalePriceAndTotals() and default discount is 0.0
 */
const products = [
  { name: 'Mobile', stock: 3, original: 4000 },
  { name: 'Laptop', stock: 1, original: 10000, discount: 0.1 },
  { name: 'Mouse', stock: 4, original: 299.99 },
  { name: 'Keyboard', stock: 1, original: 299.99, discount: 0.8 },
  { name: 'Headphone', stock: 2, original: 199.99, discount: 0.65 }
];

const calculateSalePriceAndTotals = (products: {name:string; stock: number; original: number; discount?: number}[]): {name: string; stock: number; original: number; discount?: number; salePrice: number; total: number}[] => {
    return products.map(({discount = 0.0, original,stock, ...rest }) =>  {
        const salePrice = original - original * discount;
        const total = salePrice * stock;

        return {
            stock, original,...rest,salePrice,total,
        };
    });
};

console.log(calculateSalePriceAndTotals(products));


/*
output:
[
  {
    name: "Mobile",
    original: 4000,
    sale: 4000,
    stock: 3,
    total: 12000
  },
  {
    discount: 0.1,
    name: "Laptop",
    original: 10000,
    sale: 9000,
    stock: 1,
    total: 9000
  },
  {
    name: "Mouse",
    original: 299.99,
    sale: 299.99,
    stock: 4,
    total: 1199.96
  },
  {
    discount: 0.8,
    name: "Keyboard",
    original: 299.99,
    sale: 59.99799999999999,
    stock: 1,
    total: 59.99799999999999
  },
  {
    discount: 0.65,
    name: "Headphone",
    original: 199.99,
    sale: 69.9965,
    stock: 2,
    total: 139.993
  }
]
*/