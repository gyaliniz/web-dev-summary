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
    },

    get fullModel() {
        return `${this.brand} : ${this.model}`
    },

    set fullModel(value) {
        const parts = value.split(':');
        this.brand = parts[0];
        this.model = parts[1];
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

console.log(car.fullModel)
// logs: BMW : X5
car.fullModel = "Volvo : XC40"

console.log(car.fullModel);
// logs: Volvo  :  XC40

console.log('--------Dynamicalling deleting adding property to an object');

// 
console.log(car.weight);
delete car.weight;
console.log(car.weight);

car.weight = '1234 kg'
console.log('car.weight :>> ', car.weight);

/*
2000kg
undefined
car.weight :>>  1234 kg
*/



// Enumareting Properties
console.log('--------Enumareting Properties');
for(let key in car) {
    if(typeof car[key] !== 'function') {
        console.log(car[key]);
    }
}

if('weight' in car) {
    console.log('car has weight property');
}