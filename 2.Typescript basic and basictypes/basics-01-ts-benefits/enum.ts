//enum  -->An enum is a special "class" that represents a group of constants (unchangeable variables).
//To define global constant..

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

//By default, enums will initialize the first value to 0 and add 1 to each additional value:
enum Role {
    ADMIN = 'ADMIN',
    READ_ONLY = 100,
    AUTHOR = 'AUTHOR',
};

const person1 = {
    name: 'Rk',
    age: 20,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

if (person1.role === Role.ADMIN) {
    console.log('is admin');   
}