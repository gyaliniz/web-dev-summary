// TOPIC: delegate function
const isZero = n => n === 0;

console.log([0, 1, 27, 0, 12].filter(isZero).length);
// logs: 2

const welcomeUser = (enteringHour) => enteringHour < 12 ? 'Good Morning' : 'God afternoon';

console.log(welcomeUser(10));
// logs: Good Morning

console.log(welcomeUser(13));
// logs: God afternoon

// TOPIC: currying: used to pass default arguments beforehand 
// when calling a function with lots of arguments

const convertUnits = (toUnit, factor, offset = 0) =>
    value => ((value + offset) * (factor)).toFixed(2).concat(toUnit)

const fahrenheitToCelcius = convertUnits(' degree C', 5 / 9, -32);
const milesToKm = convertUnits(' km', 1.609, 0);

console.log(fahrenheitToCelcius(80));
// logs: 26.67 degree C

console.log(milesToKm(100));
// logs: 160.90 km

// TOPIC: chaining

const shoppingCart = [
    {name: "Apple Juice", price: 1.13},
    {name: "Coca Cola", price: 1.56},
    {name: 'Orange Juice', price: 1.37}
]

const juiceTotal = shoppingCart.
filter(item => item.name.includes('Juice')).
reduce((acc, curr) => acc + curr.price, 0).
toFixed(2);

console.log(juiceTotal);
// logs: 2.50