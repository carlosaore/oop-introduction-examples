import Vehicule from "./vehicle.js";

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

    // Overriding a method
    logTypeAndProps() {
        console.log(`Car specs : ${this.getPropsString()}`)
    };
};

export default Car;