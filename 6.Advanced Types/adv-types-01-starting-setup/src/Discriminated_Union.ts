//--> Discriminated Union

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runingSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    console.log(animal);
    
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runingSpeed;
            break;
    }
    console.log('Moving at speed: ' + speed);
}  

moveAnimal({type: 'bird', flyingSpeed: 10});

