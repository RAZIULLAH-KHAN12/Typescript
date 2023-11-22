console.log("Generics!...");
// const names: Array<string> = [];  //100 % is equal to string[]
// // names[0].split(' ');
// const promise: Promise<number> = new Promise((resolve, _) => {
//     setTimeout(() => {
//       resolve(10);
//     }, 2000);
// });

// promise.then(data => {
//     // data.split(" ");
// })

function merge<T extends object, U extends object>(objA1: T, objB: U) {
  return Object.assign(objA1, objB);
}

const mergeObj = merge({ name: "Raziullah", hoobies: ["Sports"] }, { age: 30 });
const mergeObj2 = merge({ name: "Raziullah" }, { age: 30 });
console.log(mergeObj);

interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " element";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["Sports", "Cooking"]));
// console.log(countAndDescribe(20)); //ERROR--> number have not length property

// keyof
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}
console.log(extractAndConvert({ name: "Raziullah" }, "name"));

//Generic class  --> use of this we can store anything like number, string or both.

class DataStorage<T extends number | string | boolean> {
  //it work on only primitive type
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); //-1 if not find
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("10");
textStorage.addItem("Khan");
textStorage.addItem("RK");
textStorage.removeItem("10");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// Disadvantages

// const objStore = new DataStorage<object>();
// objStore.addItem({name: 'Raziullah', age: 21});
// objStore.addItem({name: 'Khan', age: 25});
// //...
// objStore.removeItem({name: 'Raziullah', age: 21});
// console.log(objStore.getItems());

// Type Utility  --> this gives extra type safety and flexibilty
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};  //all the properties are optinal

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

//Readonly --we can lock array we can't add and modified
// const names = ['Max', 'Sports'];
// names.push('apply'); // we can push
// console.log(names);
// names[names.length-1] = 'Call';  //we can modified
// console.log(names);

const names: Readonly<string[]> = ['Max', 'Sports'];
// names.push('Hello'); //Property 'push' does not exist on type 'readonly string[]'.
// names.pop();
// names[0] = 'Maxwell';  //Index signature in type 'readonly string[]' only permits reading

// we can also use readonly in object

