import Vehicle from './vehicle';
import Car from './car';
import Motorcycle from './motorcycle';

/* class Vehicle {
    constructor(color, name, nbWheels) {
        this.color = color;
        this.name = name;
        this.nbWheels = nbWheels;
    }
    getPropsString() {
        return `The vehicle's name is ${this.name}, its color is ${this.color} it has ${this.nbWheels} wheels.`;
    }
    logTypeAndProps() {
        return console.log("Vehicle specs: " + this.getPropsString());
    }
}

class Car extends Vehicle {
    constructor(color, name, nbWheels) {
        super(color, name, nbWheels);
    }
    lockDoors() {
        return `The doors are locked`;
    }
    logTypeAndProps() {
        return console.log("Car specs: " + this.getPropsString());
    }
}

class Motorcycle extends Vehicle {
    constructor(color, name, nbWheels) {
        super(color, name, nbWheels);
    }
    logTypeAndProps() {
        return console.log("Motorcycle specs: " + this.getPropsString());
    }
} */

const myVehicle = new Vehicle("Light blue", "Pescadillac", 500);
myVehicle.logTypeAndProps();

const myCar = new Car("white", "Papamobile", 4);
myCar.logTypeAndProps();
console.log(myCar.lockDoors());

const myMotorcycle = new Motorcycle("black", "BlackMonster", 2);
myMotorcycle.logTypeAndProps();