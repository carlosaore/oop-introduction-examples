import Vehicle from "./vehicle.js";
import Car from "./car.js";
import Motorcycle from "./motorcycle.js";

const myVehicle = new Vehicle("Light blue", "Pescadillac", 500);
myVehicle.logTypeAndProps();

const myCar = new Car("white", "Papamobile", 4);
myCar.logTypeAndProps();
console.log(myCar.lockDoors());

const myMotorcycle = new Motorcycle("black", "BlackMonster", 2);
myMotorcycle.logTypeAndProps();
console.log(myMotorcycle.lockDoors());