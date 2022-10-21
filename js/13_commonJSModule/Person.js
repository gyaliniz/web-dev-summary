class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log('Walk');
    }

    getName() {
        return this.name;
    }
};

module.exports = Person;
// module.exports.Person = Person;