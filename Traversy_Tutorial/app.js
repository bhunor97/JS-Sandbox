// CONSTRUCTOR AND THE 'THIS' KEYWORD

function NewMembers (name, age, phoneNumber) {
    this.name = name;
    this.age = age;
    this.phoneNumber = phoneNumber;
};

const guest1 = new  NewMembers("Alice", 32, "021-42-55");
const guest2 = new NewMembers("Greg", 28, "878-23-41")
// // console.log(guest1, guest2)


// ---------------------------------------------------------------
// BUILT IN CONSTRUCTORS

const test1 = new String("asdasd");
const test2 = new Number(1234);
const test3 = new Boolean(false);

const greg = new Object({name: "Greg"})
const tömb = new Array("asd", 123, true)

const regex1 = /\w+/; //the regular way of writing regex
const regex2 = new RegExp("\\w+"); // you need an "\" escape way if you write regex this way
// // console.log(regex2)


// ---------------------------------------------------------------
// PROTOTYPES

function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
Person.prototype.LastNameChange = function(newLastName) {
    this.lastName = newLastName;
}

const person1 = new Person("John", "Bryanson");
const person2 = new Person("Bill", "Iverson")

person1.LastNameChange("Godwinson")
person2.LastNameChange("Truman")

// console.log(person1.getFullName())
// // xy.hasOwnProperty
// console.log(person1.hasOwnProperty("firstName"))


// ---------------------------------------------------------------
// PROTOTYPAL INHERITANCE

Person.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
}
// // console.log(person2.greeting())

function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

const customer1 = new Customer("Tom", "Smith", "555-555-5555", "Standard")
// // console.log(customer1)

// Inherit the Person Prototype method (?)
customer1.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Customer greeting - overriting the Person.greeting
Customer.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName} Welcome to our company!`
}
// // console.log(customer1.greeting())


// ---------------------------------------------------------------
// USING 'OBJECT.CREATE' - ES5 - ("not the easiest way")
const emptyObject = {
}

const john = Object.create(emptyObject);
john.firstName = "John";
john.middleName = "Daniel"
john.lastName = "Baldwin"
john.age = 40;
// // console.log(John)


const personPrototypes = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.middleName} ${this.lastName}, who is ${this.age}-years-old`;
    },
    nameChange: function(newLastName) {
        this.lastName = newLastName;
    }
}

const brad = Object.create(personPrototypes);
brad.firstName = "Brad";
brad.middleName  = "Davis"
brad.lastName = "McLane"
brad.age = 35;

brad.nameChange("Bobson");

// Don't forget the '()' after the function'
// // console.log(brad.greeting());

// Another way of creating Objects
const george = Object.create(personPrototypes, {
    firstName: {value: "George"},
    lastName: {value: "Antonio"},
    age: {value: 35}
});
// // console.log(george)


// ---------------------------------------------------------------
// ES6 CLASSES
class Person_2 {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }
    greeting() {
        return `Hi there ${this.firstName} ${this.lastName}!`
    }
    // Note: Revisit this 'age' section below
    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    // Note: Revisit this 'age' section above
    getsMarried(newLastName) {
        this.lastName = newLastName;
    }
    // static methods (a standalone method in your class that doesn't use the 'this' for example)
    static addNumbers(x, y) {
        return x + y;
    }
}
const dave = new Person_2("Dave", "Johnson")
dave.getsMarried("Anderson")
// // console.log(dave.greeting())
// // console.log(Person_2.addNumbers(5,7))


// ---------------------------------------------------------------
// SUB CLASSES
let log = console.log;

class Person_3 {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}` 
    }
}

const bill = new Person_3("Bill", "Bronson");
log(bill.greeting())