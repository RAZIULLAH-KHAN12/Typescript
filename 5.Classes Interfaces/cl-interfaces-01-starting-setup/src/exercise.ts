/*
1) Create one class named Product with id, name, amount, stock as private properties, and getters, setter and create one method named two methods increaseStock(quantity), decreaseStock(quantity).
increaseStock method does increase stock with given quantity and decreaseStock method decrese stock with given quantity.
Create three objects of Product class and, assign values as you want to these objects.  Done
*/
class Product {
    id: number;
    name: string;
    amount: number;
    
    constructor(id:number, name: string, amount: number, private stock: number) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.stock = stock;
    }

    get getStock () {
        return this.stock;
    }

    set setStock (n: number) {
        this.stock = n;
    }

    increaseStock(quantity: number){
        this.stock += quantity;
    } 
    decreaseStock(quantity: number) {
        if(this.stock > quantity){
            this.stock -= quantity;
        } else{
            console.log("Stock already less!");
            
        }
    }
}

let obj1 = new Product(1, 'Pillow', 1200, 3);
let obj2 = new Product(2, 'Carpet', 1800, 7);
let obj3 = new Product(3, 'Medicine', 200, 2);

obj1.setStock = 5; //paranthesis nahi lagana h get aur set
obj1.increaseStock(100);
console.log(obj1.getStock);
obj1.decreaseStock(500);

/*
2) Create two interfaces named Readable and Writable. Readable contains read() method with return type string and Writable contains write() method which takes string type parameter. 
   Writable interface extends Readable interface.
   Create one class named Book which implements Writable interface. 
   Book class have one property named data which type is string. delcare Writable interface methods in Book class.
   read() method returns data(string). and write method takes string as parameter and add that parameter's value in data.
   Create one object of Book class and perform read() and write() on it. Done
*/
interface Readable {
    read(): string;
}

interface Writable extends Readable  {
    write(param1: string): void;
}

class Book implements Writable {
    data: string;
        
    constructor(data: string) {
        this.data = data;
    }

    read(): string {
        return this.data;
    }
        
    write(param1: string): void {
        this.data += param1;
    }
}

let rd1 = new Book("Hello");
console.log(rd1);
console.log(rd1.read());
rd1.write(" Typescript");
console.log(rd1.read());

/*
3) Create one interface named Student contains id, name, college, age, gender properties. gender is a optional property.
then after create one array of Student type. and write a logic that create one object that contains data about number of students in particular college. Done*/

/*For Example:
if students: Student = [
        {
                id: 1,
                name: 'Rohan',
                college: 'GEC',
                age: 20
        },
        {
                id: 2,
                name: 'Rahul',
                college: 'GEC',
                age: 20
        },
        {
                id: 3,
                name: 'Ram',
                college: 'VVP',
                age: 20
        },
        {
                id: 4,
                name: 'Rakesh',
                college: 'DARSHAN',
                age: 20
        },
];
then output: 
[
        {
                college: 'GEC',
                noOfStudents: 2
        },
        {
                college: 'VVP',
                noOfStudents: 1
        },
        {
                college: 'DARSHAN',
                noOfStudents: 1
        }
]
*/

interface Student {
        id: number;
        name: string;
        college: string;    
        age: number;    
        gender?: string;    
}

const students: Student[] = [
        {
                id: 1,
                name: 'Rohan',
                college: 'GEC',
                age: 20
        },
        {
                id: 2,
                name: 'Rahul',
                college: 'GEC',
                age: 20
        },
        {
                id: 3,
                name: 'Ram',
                college: 'VVP',
                age: 20
        },
        {
                id: 4,
                name: 'Rakesh',
                college: 'DARSHAN',
                age: 20
        },
];

const countCol: { college: string; noOfStudents: number }[] = [];

students.forEach((student) => {
  const index = countCol.findIndex((count) => count.college === student.college);

  if (index !== -1) {
    // College already exists in the array
    countCol[index].noOfStudents += 1;
  } else {
    // College doesn't exist in the array, add it
    countCol.push({ college: student.college, noOfStudents: 1 });
  }
});

console.log(countCol);
