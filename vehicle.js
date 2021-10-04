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

export default Vehicule;