const promptUser = require('./src/inquirer');

const generatePage = require('./src/page-template');
const writeFile = require('./utils/generate-site');

// initiate program
promptUser()
// .then(arr => {
//     return formatData(arr);
// })
.then(arr => {
    return generatePage(arr);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err)
});
