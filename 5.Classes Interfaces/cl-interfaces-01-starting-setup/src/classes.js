// Code goes here!
console.log("Class and interface");
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n; 
        // console.log(Department.fiscalYear)
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        // this.id = 'd2';
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2023;
    return Department;
}());
// const accounting = new Department('d1', 'Accounting');
// accounting.addEmployee('Max');
// accounting.addEmployee('Raziullah');
// accounting.addEmployee('Ravi');
// accounting.employees[3] = 'Anna'; // throw error bcs we set private access modifies
// console.log(accounting);
// accounting.describe();
// accounting.printEmployeeInformation();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
