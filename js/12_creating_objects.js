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