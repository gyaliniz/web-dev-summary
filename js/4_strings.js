var txt = "HelloWorldJavascript"

// most of the time you are going to handle string variables
// Js has lots of utility properties and functions
console.log(txt.length);

// get parts of a string
console.log(txt.slice(0, 5));
console.log(txt.slice(5, 10));
console.log(txt.slice(10, txt.length));


console.log(txt.substring(5, 10));


const travelStr = "Visit New York"

// replace part of a string
const newDestination = travelStr.replace("New York", "Santa Barbara")

console.log(newDestination);

// split input string at matched indexes
console.log(travelStr.split(' '));
console.log(travelStr.split(''));
