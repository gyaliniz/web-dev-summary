
## TYPES

- Primitive types: value types - copied when assigned

1. String
2. Number
3. Boolean
4. null
5. undefined

```js
let b = 2
let a = b // a and b points different lolcations in the memory
```

- Reference Types: points the same location in the memory when assigned to

1. array
2. object
3. function

```js
let a = {x: 3}
let b = a // points the same object with a

a.x = 4 // b.x becomes 4 as well
```


## Object's element notation

```js
let person = {
    name: 'John',
    age: 30
}

// Dot notation
// Preferred
person.name = 'Jason'

// Bracket notation
// use when you need dynamic binding
// or do not know the element beforehand
person['name'] = 'Henry'

```

## Falsy Operators

- false
- undefined
- null
- 0
- ''
- NaN


## Reaching items of an object

```js
for(let key in person) {
    console.log(key, person[key])
}
```


## Updating Object properties/function dynamically

```js
const person = {
    name: 'jason'
}

person.age = 25
person.showInfo = function () {
    console.log(this.name, this.age)
}

delete person.age;
```

## Functions are Objects


## Templeate Literals

```js
const strTemp = `This is a test



and the last part of the text is here`;
console.log(strTemp); 
// with template literal we can create multi line strings

```

## Check if array has the item

```js
arr = [1, 2, 3, 4]
if(arr.indexOf(1) !== -1) {
    console.log(`It includes 1`)
}

```

## Hosting 

Hosting is moving function decleration to the top of the file.

This is done by JS Engine.



## Variant Function Parameters

```js
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
```


## Function with Default Params


```js

function getResult(count, factor = 2) {
  return count * factor;
}

console.log(getResult(2))

console.log(getResult(3, 5))
```


# Getters and Setters

```js
const car = {
    brand: "BMW",
    model: "X5",

    get fullModel() {
        return `${this.brand} : ${this.model}`
    },

    set fullModel(value) {
        const parts = value.split(':');
        this.brand = parts[0];
        this.model = parts[1];
    }
}

console.log(car.fullModel)
// logs: BMW : X5
car.fullModel = "Volvo : XC40"

console.log(car.fullModel);
// logs: Volvo  :  XC40

```

* Arrow functions inherit this from containing function
* Regular functions inherit this from the global object