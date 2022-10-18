function toCelcius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

console.log(toCelcius(80).toFixed(2) === "26.67");

// argument var passes all parameters given in a function call
function sum(a, b) {
    for(let value of arguments) {
        console.log(value);
    }
}

sum(1, 2, 3, 4, 5)

// rest operator

function sumWithRest(...args) {
    for(let value of args) {
        console.log(value);
    }
}

sumWithRest(6, 7, 8, 9)


// FUNCTIONS with default params

function getResult(count, factor = 2) {
    return count * factor;
  }
  
  console.log(getResult(2))
  
  console.log(getResult(3, 5))
  