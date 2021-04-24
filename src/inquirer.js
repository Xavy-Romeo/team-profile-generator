// require inquirer
const inquirer = require('inquirer');

// validation function to return error or true
const userInput = (input, blankError, regex, inputError) => {
    if (!input) {
        return blankError;
    }
    
    if (!regex.test(input)) {
        return inputError;
    }
    
    return true;
};

// inquirer - firstName validation function
const firstName = input => {
    let firstBlankError = 'Please enter your first name.';
    let firstRegex = /^[a-zA-Z]+$/;
    let firstInputError = 'Please enter letters only.';

    return userInput(input, firstBlankError, firstRegex, firstInputError);
};

// inquirer - lastName validation function
const lastName = input => {
    let lastBlankError = 'Please enter your last name.';
    let lastRegex = /^[a-zA-Z]+$/;
    let lastInputError = 'Please enter letters only.';

    return userInput(input, lastBlankError, lastRegex, lastInputError);
};

// inquirer - 'manager' id validation function
const id = input => {
    let idRegex = /1/;
    let idBlankError = 'Please enter your manager id 1 (note: not meant for production).';
    let idInputError = 'Please enter 1 for manager id (note: not meant for production).';
    
    return userInput(input, idBlankError, idRegex, idInputError);
};

// inquirer - email validation function
const email = input => {
    let emailRegex = /^\S+@\S+\.\S+$/;
    let emailBlankError = 'Please enter your email.';
    let emailInputError = 'Please enter a valid email format.';
    
    return userInput(input, emailBlankError, emailRegex, emailInputError);
};

// inquirer - office validation function
const office = input => {
    let officeRegex = /^[A-Z0-9]{1,6}$/;
    let officeBlankError = 'Please enter your office number.';
    let officeInputError = 'Please enter a valid office number.';
    
    return userInput(input, officeBlankError, officeRegex, officeInputError);
};

// inquirer prompt manager id:1 info
const promptUser = employeeArray => {
    return inquirer.prompt([
        {
            name: 'firstName',
            type: 'input',
            message: 'What is your first name?',
            validate: firstNameInput => firstName(firstNameInput), 
        },
        // {
        //     name: 'lastName',
        //     type: 'input',
        //     message: 'What is your last name?',
        //     validate: lastNameInput => lastName(lastNameInput),
        // },
        // {
        //     name: 'id',
        //     type: 'input',
        //     message: 'What is your id number?',
        //     validate: idNameInput => id(idNameInput), 
        // },
        // {
        //     name: 'email',
        //     type: 'input',
        //     message: 'What is your email address?',
        //     validate: emailNameInput => email(emailNameInput),
        // },
        // {
        //     name: 'office',
        //     type: 'input',
        //     message: 'What is your office number?',
        //     validate: officeNameInput => office(officeNameInput),
        // },
        {
            name: 'addEmployee',
            type: 'confirm',
            message: 'Would you like to add another employee?',
            default: false,
        }
    ])
    .then(managerData => {
        const createEmployeeArray = () => {
            delete managerData.addEmployee;
            // if entering info for first time
            if (!employeeArray) {
                employeeArray = [managerData];
            }
            // if reentering manager 1 info or making changes
            else {
                employeeArray.splice(0, 1, managerData);
            } 
        };

        // if true, add employee
        if(managerData.addEmployee) {
            createEmployeeArray();
            promptAddEmployee(employeeArray);
            return employeeArray;
        }
        else {
            createEmployeeArray();
            return employeeArray;
        }        
    });
};

// inquirer prompt other employee info
const promptAddEmployee = employeeArray => {
    return inquirer.prompt([
        {
            name: 'title',
            type: 'list',
            message: 'Choice a title for the employee',
            choices: ['Manager', 'Engineer',  'Intern'],
        },
        {
            name: 'email',
            type: 'input',
            message: "What is the employee's email address?",
            validate: emailNameInput => email(emailNameInput),
        },
        {
            name: 'office',
            type: 'input',
            message: "What is the manager's office number?",
            when: ({title}) => {
                if (title === 'Manager') {
                    return true;
                }
                else {
                    return false;
                }
            },
            validate: officeNameInput => office(officeNameInput),
        },
        {
            name: 'github',
            type: 'input',
            message: "What is the engineer's github profile?",
            when: ({title}) => {
                if (title === 'Engineer') {
                    return true;
                }
                else {
                    return false;
                }
            },
            validate: github => {
                if (github) {
                    return true;
                }
                else {
                    return "Please enter engineer's github!";
                }
            },
        },
        {
            name: 'school',
            type: 'input',
            message: 'What school does the intern attend?',
            when: ({title}) => {
                if (title === 'Intern') {
                    return true;
                }
                else {
                    return false;
                }
            },
            validate: school => {
                if (school) {
                    return true;
                }
                else {
                    return "Please enter intern's school!";
                }
            },
        },
        {
            name: 'anotherEmployee',
            type: 'confirm',
            message: 'Would you like to add another employee?',
            default: false,
        },
    ])
    .then(employeeData => {
        // function to delete anotherEmployee question from employee info
        const deleteAnotherQuestion = () => {
            delete employeeData.anotherEmployee;
            employeeArray.push(employeeData);
        };

        // if true, add another employee
        if (employeeData.anotherEmployee) {
            deleteAnotherQuestion();
            promptAddEmployee(employeeArray);
        }
        else {
            deleteAnotherQuestion();
            return employeeArray;
        }
    });
};

module.exports = promptUser;