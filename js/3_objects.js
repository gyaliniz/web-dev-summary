const car = {
    brand: "BMW",
    model: "X5",
    weight: "2000kg",
    color: "white",

    start: function() {
        console.log('Engine is started');
    },

    drive: function () {
        console.log('Driving');
    },

    brake: function () {
        console.log('Slowing');
    },

    stop() {
        console.log('Engine stopped');
    },

    printInfo() {
        console.log(this.brand);
        console.log(this.model);
        console.log(this.color);
        console.log(this.weight);
    }

}

// object is a collection of methods and properties
// car has brand, model, weight and color properties
// it also has printInfo, start, drive, brake and stop methods
console.log('---------------');
console.log('Printing Info');

car.printInfo()

console.log('---------------');
console.log('Calling other methods');

car.start()
car.drive()
car.brake()
car.stop()

