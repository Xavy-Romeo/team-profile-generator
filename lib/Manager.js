const Employee = require('./Employee');

class Manager extends Employee {
    constructor(firstName, lastName, id, email, officeNumber) {
        // call parent constructor
        super(firstName, lastName, id, email);

        this.officeNumber = officeNumber;
    }
    getRole() {
        return `Manager`;
    }
};

module.exports = Manager;