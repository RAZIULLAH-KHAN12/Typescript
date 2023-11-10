let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Cooking']  //get error Type 'number' is not assignable to type 'string'.

// let favoriteActivities: any[];
// favoriteActivities = ['Sports', 'Cooking', 1];

console.log(favoriteActivities);

favoriteActivities.push('Racing');

for(const hobby of favoriteActivities ) {
    console.log(hobby.toUpperCase());
    
}
