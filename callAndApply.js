const normalPerson = {
    firstName: 'Rahim',
    lastname: 'Uddin',
    salary: 15000,
    getFullName: function (){
        console.log(this.firstName, this.lastname);
    },
    chargeBill: function (amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const returnSalary = normalPerson.chargeBill(100)
console.log(returnSalary);
console.log(normalPerson);
