// defining class
class User {
    // class constructor
    constructor(name, type) {
        this.#name = name;
        this.#type = type;

        this.#hashSecret()
    }

    // you can define function without
    // function keyword
    getName () {
        // properties of class must be called
        // via this keyword
        return this.#name;
    }

    getType () {
        return this.#type;
    }

        // to make a private propery or method, use # sign
    #hashSecret() {
        this.secret %= 50;
    }

    // You can define static vars as well
    // Now these vars chained to class definition
    static TYPE_ADMIN = 'admin';
    static TYPE_REGULAR = 'regular';

    secret = 1234;
    #name = '';
    #type = '';

};

// create a User
const user = new User("John", User.TYPE_ADMIN);

// inheritance in JS use extends keyword when
// defining a child/sub class
class Author extends User {
    #posts = [];

    constructor(name, posts) {
        // call parent class constructor via super method
        super(name, User.TYPE_REGULAR);
        this.#posts = posts;
    }

    getPosts() {
        return this.#posts;
    }
}

const writer = new Author('John Doe', ["The sky is the limit", "Wrote it For Fun"])

console.log('Name: ', writer.getName());
console.log('Type: ', writer.getType());
console.log('Posts: ', writer.getPosts());

/*
logs...

Name:  John Doe
Type:  regular
Posts:  [ 'The sky is the limit', 'Wrote it For Fun' ]
*/

// type checking of classes
console.log(writer instanceof User); // true
console.log(writer instanceof Author); // true

console.log(writer.constructor === User); // false
console.log(writer.constructor === Author); // true

