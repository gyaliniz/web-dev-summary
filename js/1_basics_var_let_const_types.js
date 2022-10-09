// prefer const whenever possible
const PI = 3.14

// use var for global variables

var userName = "Jason"

// you can assign different values now
userName = "Mathew"

if (userName === "Mathew") {
    console.log("You changed your name")
}

// define function
const myFunction = function () {
    // use let for local variables
    let lengthOfUserName = userName.length // 6

    console.log(`The length before changing username: ${lengthOfUserName}`);
    userName = "Reynald"

    lengthOfUserName = userName.length // 7
    console.log(`The length after changing username: ${lengthOfUserName}`);

    // If you do not assign a value to a variable
    // type of it is undefined
    let uDef;
    console.log(uDef);

    // you can assign a value later
    uDef = "Hello"
    console.log(uDef);

    // Js has different policy when you sum string and numbers
    const weirdSum = 2 + 3 + "4" + "5";
    // The result is 545
    console.log(weirdSum);

    // And we have two equality operator alternatives
    if (2 == "2") { // opposite: !=
        console.log('');
        console.log('For a regular check, JS does not check types of values');
        console.log('so it transform number 2 to string "2" and assumes 2 = "2"');
    }

    if (2 !== "2") { // opposite: ===
        console.log('');
        console.log('here JS checks the type of the variables as well');
        console.log('so 2 != "2"');
    }
}

// call function
myFunction()