//spread operator
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

activeHobbies.push(...hobbies);  //it tells vanilla javascript pull all out the elements of hobbies array and push in activeHobbies.

const person = {
    name: 'Raziullah',
    age: 30
};

// const copiedPerson = person; //copy pointer
const copiedPerson = { ...person }; 