
function identityTwo(val: number | string): number | string{
    return val;
}

function identityThree(val: any): any{
    return val;
}

function identityFour<Type>(val: Type): Type{
    return val; 
}

function identityFive<T>(val: T): T{
    return val;
}

interface Bir {
    name: string;
    age: number;
}
identityFive("Hello");
identityFive<Bir>({name: 'Abd', age: 16});
identityTwo('Hello');