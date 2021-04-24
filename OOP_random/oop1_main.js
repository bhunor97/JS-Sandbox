class Car {
    constructor (carType, carColor){
        this.carType = carType;
        this.carColor = carColor;
    }
}

let firstCar = new Car("Ferrari", "Red");
let secondCar = new Car("Lambo", "Green")

console.log(firstCar);
console.log(secondCar);

// the "new" keyword
// - creates a new empty object {}
// - sets the value of "this" the new empty object
// - calls the constructor method