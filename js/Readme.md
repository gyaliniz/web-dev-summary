
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

