// factory function
function getPerson(name) {
    return {
        name,
        showName() {
            console.log(name);
        }
    };
}

const jason = getPerson('Jason');

jason.showName()

const henry = getPerson('Henry');

henry.showName()


// constructor function 
function Person(name) {
    this.name = name // binding

    this.showName = () => {
        console.log(this.name);
    }
}

const jacob = new Person('jacob');
// new create {} empty objects
jacob.showName()

const person = {
    name: 'jason'
}

person.age = 25
person.showInfo = function () {
    console.log(this.name, this.age)
}

person.showInfo()


// Person.call({}, 'alex')
// Person.apply({}, [1, 2, 3])

console.log("Object assign");

// copying object 1
const anotherPerson = Object.assign({}, person);

for (const key in anotherPerson) {
    if (Object.hasOwnProperty.call(anotherPerson, key)) {
        const element = anotherPerson[key];
        console.log(element);
    }
}

// copying object 2: spread operator
const copiedAnother = {...person};

console.log(copiedAnother);