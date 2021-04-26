const promptUser = require('./src/inquirer');
const generateHtml = require('./src/page-template');
const generateCss = require('./src/css-template');
const {writeHtml, writeCss} = require('./utils/generate-site');

// initiate program
promptUser()
.then(employeeArr => {
    return generateHtml(employeeArr);
})
.then(pageHTML => {
    return writeHtml(pageHTML);
})
.then(generateCss)
.then(writeCss)
.catch(err => {
    console.log(err);
});