/*
1) Create one class named Product with id, name, amount, stock as private properties, and getters, setter and create one method named two methods increaseStock(quantity), decreaseStock(quantity).
increaseStock method does increase stock with given quantity and decreaseStock method decrese stock with given quantity.
Create three objects of Product class and, assign values as you want to these objects.  Done
*/
var Product = /** @class */ (function () {
    function Product(id, name, amount, stock) {
        this.stock = stock;
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.stock = stock;
    }
    Object.defineProperty(Product.prototype, "getStock", {
        get: function () {
            return this.stock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "setStock", {
        set: function (n) {
            this.stock = n;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.increaseStock = function (quantity) {
        this.stock += quantity;
    };
    Product.prototype.decreaseStock = function (quantity) {
        if (this.stock > quantity) {
            this.stock -= quantity;
        }
        else {
            console.log("Stock already less!");
        }
    };
    return Product;
}());
var obj1 = new Product(1, 'Pillow', 1200, 3);
var obj2 = new Product(2, 'Carpet', 1800, 7);
var obj3 = new Product(3, 'Medicine', 200, 2);
console.log(obj1);
/*
2) Create two interfaces named Readable and Writable. Readable contains read() method with return type string and Writable contains write() method which takes string type parameter.
   Writable interface extends Readable interface.
   Create one class named Book which implements Writable interface.
   Book class have one property named data which type is string. delcare Writable interface methods in Book class.
   read() method returns data(string). and write method takes string as parameter and add that parameter's value in data.
   Create one object of Book class and perform read() and write() on it. Done
*/
/*
3) Create one interface named Student contains id, name, college, age, gender properties. gender is a optional property.
then after create one array of Student type. and write a logic that create one object that contains data about number of students in particular college. Done
For Example:
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
