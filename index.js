// Creating a new class
class Vehicule {
    constructor(color, name, numberOfWheels) {
        this.color = color;
        this.name = name;
        this.numberOfWheels = numberOfWheels
    };

    getPropsString() {
        return `color -> ${this.color}; name -> ${this.name}; number of wheels -> ${this.numberOfWheels}`
    };

    logTypeAndProps() {
        console.log(`Vehicle specs : ${this.getPropsString()}`)
    };
};

// Extending a Class
class Motorcycle extends Vehicule {
    constructor(color, name, numberOfWheels) {
        // Here, constructor calls the parent class' constructor
        super(color, name, numberOfWheels)
        // Note: In derived classes, super() must be called before you
        // can use 'this'. Leaving this out will cause a reference error.
    };

    // Overriding a method
    logTypeAndProps() {
        console.log(`Motorcycle specs : ${this.getPropsString()}`)
    };
};

class Car extends Vehicule {
    constructor(color, name, numberOfWheels) {
        // Here, the constructor calls the parent class' constructor
        super(color, name, numberOfWheels)
        // Note: In derived classes, super() must be called before you
        // can use 'this'. Leaving this out will cause a reference error.
        
        // Adding a new property
        this.hasLockedDoors = false;
    }

    // Adding a new method
    lockDoors() {
        this.hasLockedDoors = true;
    };

    // Adding a new method
    openDoors() {
        this.hasLockedDoors = false;
    };

    logTypeAndProps() {
        console.log(`Car specs : ${this.getPropsString()}`)
    };
};

const genericVehicle = new Vehicule("red", "Bat Mobile", 5);
genericVehicle.logTypeAndProps();

console.log("***")

const myMotorcycle = new Motorcycle("blue", "Akira", 2);
myMotorcycle.logTypeAndProps();

console.log("***")

const myCar = new Car("grey", "Truckzilla", 5);
myCar.logTypeAndProps();
console.log(myCar.hasLockedDoors);
myCar.lockDoors()
console.log(myCar.hasLockedDoors);