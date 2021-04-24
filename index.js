const promptUser = require('./src/inquirer');
const createPage = require('./src/page-template');

// initiate program
promptUser()
.then(array => {
    console.log(array);
    return createPage(array);
})
.catch(err => {
    console.log(err)
});