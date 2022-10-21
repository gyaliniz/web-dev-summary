export class Person {
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


// export default Person