const promptUser = require('./src/inquirer');

const generatePage = require('./src/page-template');
const writeFile = require('./utils/generate-site');

// initiate program
promptUser()
// .then(arr => {
//     if (arr[0].addEmployee) {
//         delete arr[0].addEmployee;
//         promptAddEmployee(arr);
//         return false;
//     }
//     else {
//         delete arr[0].addEmployee;
//         return arr;
//     }
// })
// .then(employeeArray => {
//     return generatePage(employeeArray);
// })
// .then(pageHTML => {
//     return writeFile(pageHTML);
// })
// .catch(err => {
//     console.log(err)
// });
.then(data => {
    console.log('index.js 29', data)
});



// set timer to keep checking if promptUser is complete
// use key in inquirer to signal finished