class Person {
    
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

/**
 * new keyword is used to create an object form a class
 */
const heroPerson = new Person('Hero', 'Balam', 20000);
console.log(heroPerson);
const friendlyPerson = new Person('Hero' , 'Kalam', 25000);
console.log(friendlyPerson);


/**
 *  old way of declaration class / old oop
 * @param {*} firstName 
 * @param {*} lastName 
 * @param {*} salary 
 */
function PersonOld(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson = new PersonOld('Grand', 'Papa', 1200);
console.log(oldPerson);
