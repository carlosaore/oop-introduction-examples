/*
1. Write a Vehicle class with:
    - attributes that represent the color, the name and the number of wheels of the vehicle.
    - a method "getPropsString" that returns a string with all vehicule properties (ex : "key1 has a value of val1, key2 has a value of val2, ...")
    - a method "logTypeAndProps" that logs: "Vehicle specs : " followed by the the output of "getPropsString".

2. Then, write the Motorcyle and Car classes that inherit from Vehicle.

3. In the Car class, write a method that only makes sense for cars and not motorcycles (ex: "lockDoors").

4. In Vehicle's derived classes, override the logTypeAndProps method to specify whether the object is an instance of Motorcycle or Car (ex: print "Car specs : ..." or "Motorcycle specs : ..." instead of "Vehicle specs : ...").
*/

class Vehicle {
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

module.exports = Vehicle;