const normalPerson = {
    firstName: 'Rahim',
    lastname: 'Uddin',
    salary: 150000,
    getFullName: function (){
        console.log(this.firstName, this.lastname);
    },
    chargeBill: function (amount){
        console.log(this);
        this.salary = this.salary - amount
        return this.salary;
    }
}
