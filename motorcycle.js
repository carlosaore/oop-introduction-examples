import Vehicule from "./vehicle.js"

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

export default Motorcycle;