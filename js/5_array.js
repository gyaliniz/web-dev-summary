const cars = ["BMW", "Volvo", "Ford"]

console.log(cars);
// logs: [ 'BMW', 'Volvo', 'Ford']

// arrays are objects
console.log(cars instanceof Array);
// logs: true

console.log(Array.isArray(cars));
// logs: true

console.log(cars.toString());
// logs: BMW,Volvo,Ford

console.log(cars.join(' - '));
// logs: BMW - Volvo - Ford

cars.push('Mercedes')
console.log(cars);
// logs: [ 'BMW', 'Volvo', 'Ford', 'Mercedes' ]

console.log(cars[cars.length - 1]);
// logs: Mercedes

cars.pop();
console.log(cars);
// logs: [ 'BMW', 'Volvo', 'Ford' ]

console.log(cars[0]);
// logs: BMW

console.log(cars.slice(1));
// logs: [ 'Volvo', 'Ford' ]

console.log(cars.slice(1, 2));
// logs: [ 'Volvo' ]

console.log(cars);
// logs: [ 'BMW', 'Volvo', 'Ford' ]

cars.sort();
console.log(cars);
// logs: [ 'BMW', 'Ford', 'Volvo' ]

cars.reverse();
console.log(cars);
// logs: [ 'Volvo', 'Ford', 'BMW' ]

const values = [1, 100, 10, 10000, 1000]

values.sort((a, b) => a - b);
console.log(values);
// logs: [ 1, 10, 100, 1000, 10000 ]


values.sort((a, b) => b - a)
console.log(values);
// logs: [ 10000, 1000, 100, 10, 1 ]


values.sort((a, b) => 0.5 - Math.random());
console.log(values);
// logs: [ 10000, 10, 100, 1, 1000 ] - random

const getMin = function (arr) {
    return Math.min(...arr);
}

console.log(getMin(values));
// logs: 1

const getMax = (arr) => {
    return Math.max(...arr);
}

console.log(getMax(values));
// logs: 10000

const myCars = [
    {type: 'Renault', year: 2020},
    {type: "Mercedes", year: 2009},
    {type: "Volvo", year: 2022}
]

console.log(myCars);
/* logs: 
[
  { type: 'Renault', year: 2020 },
  { type: 'Mercedes', year: 2009 },
  { type: 'Volvo', year: 2022 }
]
*/

myCars.sort((carA, carB) => carB.year - carA.year)

console.log(myCars);
/* logs: 
[
  { type: 'Volvo', year: 2022 },
  { type: 'Renault', year: 2020 },
  { type: 'Mercedes', year: 2009 }
]
*/