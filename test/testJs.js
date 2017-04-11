/**
 * Created by hoyeo on 2017-04-10.
 */


function Car() {
    this.wheel = 4;
    this.beep = "BEEP!";
    this.go = function () {

    }
}
Car.prototype.go = function () {
    console.log(this.beep);
};

function Truck() {
this.wheel = 6;
this.beep = "HONK!";
};

Truck.prototype = new Car();
function SUV() { this.beep = "WANK!";
};

SUV.prototype = new Car();
var truck = new Truck(), suv = new SUV();
console.log(truck.wheel == 6 && suv.wheel == 4); // === true;
console.log(truck.beep == "HONK!" && suv.beep == "WANK!"); // === true;
truck.go(); // === "HONK!"
suv.go(); // === "WANK!"

