class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Balam', 20000);
console.log(heroPerson);
const friendlyPerson = new Person('Hero', 'Kalam', 25000);
console.log(friendlyPerson);


/**
 * Old way of declearation object 
 */

function Person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    this.getname = function(){
        return this.firstName;
    }
}

const oldPerson = new Person1('Grand', 'Papa', 1200);
console.log(oldPerson)

const person2 = {
    firstName: 'Md. Omor',
    lastName : 'Faruk',
    getname: function(){
        return this.firstName;
    }
}

console.log(person2)