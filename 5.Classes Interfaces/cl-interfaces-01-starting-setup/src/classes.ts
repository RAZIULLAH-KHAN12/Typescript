// Code goes here!
console.log("Class and interface");
abstract class Department {
    static fiscalYear = 2023;
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n; 
        // console.log(Department.fiscalYear)
    }

    static createEmployee(name: string) { 
        return {name: name}
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        // this.id = 'd2';
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

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


