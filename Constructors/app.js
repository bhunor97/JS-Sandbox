// CONSTRUCTOR

function NewMembers (name, age, phoneNumber) {
    this.name = name;
    this.age = age;
    this.phoneNumber = phoneNumber;
};

const guest1 = new  NewMembers("Alice", 32, "021-42-55");
const guest2 = new NewMembers("Greg", 28, "878-23-41")
// // console.log(guest1, guest2)


// -----------------------------------------------------
// BUILT IN CONSTRUCTORS

const test1 = new String("asdasd");
const test2 = new Number(1234);
const test3 = new Boolean(false);

const greg = new Object({name: "Greg"})
const tömb = new Array("asd", 123, true)

const regex1 = /\w+/; //the regular way of writing regex
const regex2 = new RegExp("\\w+"); // you need an "\" escape way if you write regex this way
// // console.log(regex2)


// -----------------------------------------------------
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


// -----------------------------------------------------
// PROTOTYPAL INHERITANCE

Person.prototype.greting = function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
}
// // console.log(person2.greting())

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
console.log(customer1.greeting())