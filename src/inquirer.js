const createHtml = require('./page-template');

// require classes
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

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



// inquirer - email validation function
const email = input => {
    let emailRegex = /^\S+@\S+\.\S+$/;
    let emailBlankError = 'Please enter your email.';
    let emailInputError = 'Please enter a valid email format.';
    
    return userInput(input, emailBlankError, emailRegex, emailInputError);
};

// inquirer - office validation function
const office = input => {
    let officeRegex = /^[A-Z0-9]{1,3}$/;
    let officeBlankError = "Please enter manager's office number.";
    let officeInputError = 'Please enter a maximum of 3 Uppercase letters or numbers.';
    
    return userInput(input, officeBlankError, officeRegex, officeInputError);
};

// inquirer prompt manager id:1 info
const promptUser = empArr => {
    return inquirer.prompt([
        {
            name: 'role',
            type: 'list',
            message: 'Choose manager to start.',
            choices: ['Manager']
        },
        {
            name: 'firstName',
            type: 'input',
            message: 'What is your first name?',
            validate: firstNameInput => firstName(firstNameInput), 
        },
        {
            name: 'lastName',
            type: 'input',
            message: 'What is your last name?',
            validate: lastNameInput => lastName(lastNameInput),
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is your email address?',
            validate: emailNameInput => email(emailNameInput),
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'What is your office number?',
            validate: officeNameInput => office(officeNameInput),
        },
        {
            name: 'addEmployee',
            type: 'confirm',
            message: 'Would you like to add another employee?',
            default: false,
        }
    ])
    .then(({firstName, lastName, email, officeNumber, ...other}) => {
        // give manager1 an id of 1
        let id = '1';
        
        // create a new Manager
        const manager = new Manager(firstName, lastName, id, email, officeNumber); 
        
        // create employee array
        const employeeArray = [manager];
      
        formatName(employeeArray);
        return {employeeArray, other};
    })
    .then(data => {
        if (data.other.addEmployee) {
            addEmployee(data.employeeArray)
        }
        else {
            console.log (`
                -------------------------------------------------------------------------
                Generating HTML... Upon success find generated HTML in ../dist/index.html
                -------------------------------------------------------------------------
                `);

            createHtml(data.employeeArray);
        }
    });
};

const addEmployee = empArr => {
    if(empArr.length !== 5) {
        console.log(`
                ------------------------------
                  Adding another employee!!!
                ------------------------------
            `)
        return inquirer.prompt([
            {
                name: 'role',
                type: 'list',
                message: 'Choose a role for the employee.',
                choices: ['Manager', 'Engineer',  'Intern'],
            },
            {
                name: 'firstName',
                type: 'input',
                message: "What is the employee's first name?",
                validate: firstNameInput => firstName(firstNameInput), 
            },
            {
                name: 'lastName',
                type: 'input',
                message: "What is the employee's last name?",
                validate: lastNameInput => lastName(lastNameInput),
            },
            {
                name: 'email',
                type: 'input',
                message: "What is the employee's email address?",
                validate: emailNameInput => email(emailNameInput),
            },
            {
                name: 'officeNumber',
                type: 'input',
                message: "What is the manager's office number?",
                when: ({role}) => {
                    if (role === 'Manager') {
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
                message: "What is the engineer's GitHub username?",
                when: ({role}) => {
                    if (role === 'Engineer') {
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
                when: ({role}) => {
                    if (role === 'Intern') {
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
                name: 'addEmployee',
                type: 'confirm',
                message: 'Would you like to add another employee?',
                default: false,
            },
        ])
        .then(({firstName, lastName, email, ...other}) => {
            if(other.role === 'Manager') {
                // create employee id
                const id = (empArr.length + 1).toString();
                // create new manager
                const manager = new Manager(firstName, lastName, id, email, other.officeNumber);

                // add new manager
                empArr.push(manager);
                              
                formatName(empArr);
            }
            else if (other.role === 'Engineer') {
                // create employee id
                const id = (empArr.length + 1).toString();
                // create new engineer
                const engineer = new Engineer(firstName, lastName, id, email, other.github);

                // add new engineer
                empArr.push(engineer);

                formatName(empArr);
            }
            else if (other.role === 'Intern') {
                // create employee id
                const id = (empArr.length + 1).toString();
                // create new intern
                const intern = new Intern(firstName, lastName, id, email, other.school);

                // add new intern
                empArr.push(intern);

                formatName(empArr);
            }
            else {
                return `Error: Employee role not received. Please start again!!!`;
            }

            if (other.addEmployee) {
                addEmployee(empArr);
            }
            else{

                console.log (`
                -------------------------------------------------------------------------
                Generating HTML... Upon success find generated HTML in ../dist/index.html
                -------------------------------------------------------------------------
                `);
                
                createHtml(empArr);
            }
        });
    
    }
    else {
        console.log(`
                -------------------------------------------------------------------------
                      You can add a maximum of 5 employees to your team. Thank you.
                -------------------------------------------------------------------------
            `);

        console.log (`
                -------------------------------------------------------------------------
                Generating HTML... Upon success find generated HTML in ../dist/index.html
                -------------------------------------------------------------------------
            `);   

        createHtml(empArr);
    }
};

// function to format name to desired format
const formatName = arr => {
    let first = arr[arr.length - 1].firstName;
    let last = arr[arr.length - 1].lastName;
    
    // format first name
    first = first.toLowerCase();
    first = first.charAt(0).toUpperCase() + first.slice(1);
    
    arr[arr.length - 1].firstName = first;

    // format last name
    last = last.toLowerCase();
    last = last.charAt(0).toUpperCase() + last.slice(1);
    
    arr[arr.length - 1].lastName = last;   
};

module.exports = promptUser;