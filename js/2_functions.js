function toCelcius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

console.log(toCelcius(80).toFixed(2) === "26.67");