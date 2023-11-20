
class ITDepartment extends Department{
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'Accounting');
        this.admins = admins
    }

    describe() {
        console.log('IT Department - ID: ' + this.id);
        
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if(this.lastReport) {  
            return this.lastReport;
        }
        throw new Error('No report Found.');
    }

    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error('Please pass in a valid value');
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if(AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe() {
        console.log("Accounting Departmrnt - ID: " + this.id);
        
    }

    addEmployee(name: string) {
        if(name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
        
    }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Raziullah']);

it.addEmployee('Max');
it.addEmployee('Raziullah');

it.describe();
it.printEmployeeInformation();
console.log(it);

// const acc = new AccountingDepartment('d2', []);
const acc = AccountingDepartment.getInstance();
const acc2 = AccountingDepartment.getInstance();

console.log(acc==acc2);


acc.mostRecentReport = 'Year End Report';
acc.addReport('Something went wrong...');
console.log(acc.mostRecentReport);

acc.addEmployee('Max');
acc.addEmployee('Khan');

// acc.printReports();
// acc.printEmployeeInformation();
acc.describe();