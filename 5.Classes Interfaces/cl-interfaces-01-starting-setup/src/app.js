var add;
add = function (n1, n2) {
    return n1 + n2;
};
console.log(add(5, 6));
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log("".concat(phrase, " ").concat(this.name));
        }
        else {
            console.log('Hi!');
        }
    };
    return Person;
}());
var user1;
user1 = new Person();
// user1.name = 'Manu';
user1.greet('Hi there - I am');
console.log(user1);
