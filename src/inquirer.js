// require classes
// const Manager = require('../lib/Manager');
// const Engineer = require('../lib/Engineer');
// const Intern = require('../lib/Intern');












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
    let idRegex = /^[1]{1}$/;
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
    let officeRegex = /^[A-Z0-9]{1,3}$/;
    let officeBlankError = "Please enter manager's office number.";
    let officeInputError = 'Please enter a maximum of 3 Uppercase letters or numbers.';
    
    return userInput(input, officeBlankError, officeRegex, officeInputError);
};

// inquirer prompt manager id:1 info
const promptUser = employeeArray => {
    return inquirer.prompt([
        {
            name: 'title',
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
            name: 'id',
            type: 'input',
            message: 'What is your id number?',
            validate: idNameInput => id(idNameInput), 
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
    // .then(({firstName, lastName, id, email, officeNumber}) => {
    //     return this.Employee = new Manager(firstName, lastName, id, email, officeNumber, addEmployee);
    // })
    // .then(({firstName, lastName, id, email, officeNumber, addEmployee}) => { 
        
    
        .then(managerData => {
            // if entering info for first time
            if (!employeeArray) {

                let employeeArray = [managerData];
                formatName(employeeArray);
                return employeeArray;  


                // const manager = new Manager(firstName, lastName, id, email, officeNumber);
                // employeeArray = [manager];
                // formatName(employeeArray);
                // console.log(employeeArray);

                // const add = addEmployee;
                // return employeeArray, add;
            }
            // if reentering manager 1 info or making changes
            else {
                employeeArray.splice(0, 1, managerData);
                formatName(employeeArray);
                return employeeArray;
            }  
    })
    .then(promptAddEmployee);
};

// inquirer prompt other employee info
const promptAddEmployee = employeeArray => {


// const promptAddEmployee = (employeeArray, add) => {



    if (!employeeArray[0].addEmployee) {



    // if(!add) {
    
    
    
        formatName(employeeArray);
        // remove add employee question from employee info
        delete employeeArray[0].addEmployee;   
        
        return employeeArray;
    }
    else if (employeeArray.length === 1 || employeeArray[employeeArray.length - 1].anotherEmployee && employeeArray.length !== 5) {
        formatName(employeeArray);
        delete employeeArray[employeeArray.length - 1].anotherEmployee;   

        console.log(`
        ------------------------------
          Adding another employee!!!
        ------------------------------
            `)
        return inquirer.prompt([
            {
                name: 'title',
                type: 'list',
                message: 'Choice a title for the employee',
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
                message: "What is the engineer's GitHub username?",
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
            // add id to each employee
            employeeData.id = (employeeArray.length + 1).toString();



            // push new employee into employee array
            employeeArray.push(employeeData);

            return employeeArray;


            // if (employeeArray[employeeArray.length - 1].title === 'Manager') {
            //     const data = {firstName, lastName, id, email, officeNumber};
            //     const manager = new Manager(data.firstName, data.lastName, data.id, data.email, data.officeNumber);         
                
            //     employeeArray.push(manager);
            //     console.log(employeeArray);
            //     return employeeArray;
            // }
            // else if (employeeArray[employeeArray.length - 1].title === 'Engineer'){
            //     const data = {firstName, lastName, id, email, github};
            //     const engineer = new Engineer(data.firstName, data.lastName, data.id, data.email, data.github);         
                
            //     employeeArray.push(engineer);
            //     console.log(employeeArray);
            //     return employeeArray;
            // }
            // else if (employeeArray[employeeArray.length - 1].title === 'Intern') {
            //     const data = {firstName, lastName, id, email, school};
            //     const intern = new Intern(data.firstName, data.lastName, data.id, data.email, data.school);         
                
            //     employeeArray.push(intern);
            //     console.log(employeeArray);
            //     return employeeArray;
            // }
            // else {
            //     return `Error: Role was not properly received.`;
            // }








        })
        .then(promptAddEmployee);
    }
    else if (employeeArray.length === 5) {
        formatName(employeeArray);
        delete employeeArray[employeeArray.length - 1].anotherEmployee;
        delete employeeArray[0].addEmployee;
        
        console.log(`
        -------------------------------------------------------------
        You can add a maximum of 5 employees to your team. Thank you.
        -------------------------------------------------------------`);
  
        return employeeArray;
    }
    else {  
        formatName(employeeArray);
        delete employeeArray[employeeArray.length - 1].anotherEmployee;
        delete employeeArray[0].addEmployee;
   
        return employeeArray;              
    }             
};

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