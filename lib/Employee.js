class Employee {
    constructor(firstName, lastName, id, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.email = email;
    };
    getName() {
        return `Employee's name is ${this.firstName} ${this.lastName}.`;
    }
    getId() {
        return `${this.firstName} ${this.lastName}'s id number is ${this.id}.`;
    }
    getEmail() {
        return `${this.firstName} ${this.lastName}'s email is ${this.email}.`;
    }
    getRole() {
        return `Employee`;
    }
};

module.exports = Employee;
