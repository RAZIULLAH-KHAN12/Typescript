const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  // const person= {
  name: "Raziullah",
  age: 30,
  hobbies: ['Sports', 'Cooking']
};

console.log(person.name);

//nested object
const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

console.log(product.price);
