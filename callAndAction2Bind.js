const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 1500090,
    getFullName: function (){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000,
}

// normalPerson.chargeBill(120);
/**
 * .bind() ==> we can call one obj method on another object. param is the new object. this method return a function that bind with new object
 */
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(3000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);
