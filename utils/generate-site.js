const fs = require('fs');

const writeHtml = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File: index.html created!'
            });
        });
    });
};

const writeCss = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/style.css', fileContent, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File: style.css created!'
            });
        });
    });
};

module.exports = {writeHtml, writeCss};