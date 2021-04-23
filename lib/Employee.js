class Employee {
    constructor(name) {
        this.name = name;
      
        if ('test'==='test') {
            this.id = 1;
        }
        else {
            this.id = 1;
        }
      
        this.email = 'my email';
    };
};

const jay = new Employee('jay');
const john = new Employee('john');

console.log(jay);
console.log(john);

module.exports = Employee;