import Vehicule from "./vehicle.js";
import Motorcycle from "./motorcycle.js";
import Car from "./car.js";

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