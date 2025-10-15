const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function (){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000,
}

/**
 * .call() used to call one object method to another object method. first param is 
 * the applied object. 2nd param is the object method array .
 * it direct call the method 
 */

// normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
// normalPerson.chargeBill.call(heroPerson, 3000, 300, 30);
// console.log(heroPerson.salary)


/**
 * .apply() ==> same like call(). but it take method args as array item
 */
normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
console.log(heroPerson)