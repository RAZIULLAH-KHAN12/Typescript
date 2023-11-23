function Logger(logString: string) {
  //this is decorator factory
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");

  return function <T extends { new (...arg: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering template");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

// @Logger('LOGGING - PERSON')
@Logger("LOGGING")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Raziullah";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();
console.log(pers);

// --- decorator except prototype, property name
function Log(target: any, propertyName: string | symbol) {
  //this is simple decorator
  console.log("Property decorator!");
  console.log(target, propertyName);
}

// --> Log2(prototype, name of our accessor, property descriptor)
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
  console.log();
}

function Log3(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | symbol, position: number) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log //--> this is property decorator and take two argument prototype, property name,
  title: string;
  private _price: number;

  @Log2 //--> this is accessor decorator and take three argument prototype, method name, PropertyDecriptor
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3 //--> this is method decorator and take three argument prototype, method name, PropertyDecriptor
  getPriceWithTax(@Log4 tax: number) {
    //--> this is parameter decorator and take three argument prototype, method name, position of parameter start with 0
    return this._price * (1 + tax);
  }
}

const p1 = new Product("Book", 19);
const p2 = new Product("Book 2", 29);

//--> Example Creating an Autobind Decorator.
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}
class Printer {
  message = "This works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}
const p = new Printer();
p.showMessage();

const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage);

// --> Validation with Decorator

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[] //['required', 'psitive']
  }
}

const registeredValiadtors: ValidatorConfig = {};

function Reqired(target: any, propName: string) {
  registeredValiadtors[target.constructor.name] = {
    ...registeredValiadtors[target.constructor.name],
    [propName]: ['required']
  }
}

function PositiveNumber(target: any, propName: string) {
  registeredValiadtors[target.constructor.name] = {
    ...registeredValiadtors[target.constructor.name],
    [propName]: ['positive']
  }
}

function validate(obj: any) {
  const objValidatorConfig = registeredValiadtors[obj.constructor.name];
  if(!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for(const prop in objValidatorConfig) {
    for(const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;  
      }
    }
  }
  return isValid;
}
class Course {
  @Reqired
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    // if(price > 0 && title.trim().length > 0){}  or use decorator

    const createdCourse = new Course(title, price);
    if(!validate(createdCourse)){
        alert('Invalid input, please try again!');
        return;
    }
    console.log(createdCourse);
    
})
