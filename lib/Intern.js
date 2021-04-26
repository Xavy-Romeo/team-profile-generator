const Employee = require('./Employee');

class Intern extends Employee {
    constructor(firstName, lastName, id, email, school) {
        // call parent constructor
        super(firstName, lastName, id, email);

        this.school = school;
    }
    getSchool() {
        return `${this.firstName}'s attends ${this.school}.`;
    }
    getRole() {
        return `Intern`;
    }
};

module.exports = Intern;