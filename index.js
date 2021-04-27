const promptUser = require('./src/inquirer');

const generateCss = require('./src/css-template');
const {writeHtml, writeCss} = require('./utils/generate-site');

// initiate program
promptUser()
.then(generateCss)
.then(writeCss)
.catch(err => {
    console.log(err);
});