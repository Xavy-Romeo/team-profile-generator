const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(firstName, lastName, id, email, github) {
        // call parent constructor
        super(firstName, lastName, id, email);

        this.github = github;
    }
    getGithub() {
        return `${this.firstName}'s GitHub username is ${this.github}`;
    }
    getRole() {
        return `Engineer`;
    }
};

module.exports = Engineer;