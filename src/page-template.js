const {writeHtml, writeCss} = require('../utils/generate-site');

const cardArr = [];
let htmlString = '';

const template1 = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>

        <main>
            <section class="cards-container" id="employee-cards">
`;

const template2 = `
            </section>    
        </main>
            
    </body>
    </html>
`;
 
const generateManagerCard = (role, empObj) => {
    const card = `
                <!--Card ${empObj.id}-->
                <div class="card" id="card${empObj.id}">
                
                    <div class="card-header">
                        ${empObj.firstName} ${empObj.lastName}
                        
                        <div class="sub-title">
                            ${role}
                        </div>
                    </div>
                
                    <div class="list">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${empObj.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${empObj.email}">${empObj.email}</a></li>
                            <li class="list-group-item">Office Number: ${empObj.officeNumber}</li>
                        </ul>
                    </div>

                </div>

    `;

    // push each card into card array
    cardArr.push(card);
};

const generateEngineerCard = (role, empObj) => {
    const card = `
                <!--Card ${empObj.id}-->
                <div class="card" id="card${empObj.id}">
                
                    <div class="card-header">
                        ${empObj.firstName} ${empObj.lastName}
                        
                        <div class="sub-title">
                            ${role}
                        </div>
                    </div>
                
                    <div class="list">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${empObj.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${empObj.email}">${empObj.email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${empObj.github}" target="_blank">${empObj.github}</a></li>
                        </ul>
                    </div>

                </div>

    `;

    // push each card into card array
    cardArr.push(card);
};

const generateInternCard = (role, empObj) => {
    const card = `
                <!--Card ${empObj.id}-->
                <div class="card" id="card${empObj.id}">
                
                    <div class="card-header">
                        ${empObj.firstName} ${empObj.lastName}
                        
                        <div class="sub-title">
                            ${role}
                        </div>
                    </div>
                
                    <div class="list">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${empObj.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${empObj.email}">${empObj.email}</a></li>
                            <li class="list-group-item">School: ${empObj.school}</li>
                        </ul>
                    </div>

                </div>

    `;

    // push each card into card array
    cardArr.push(card);
};

const createCards = arr => {
    // for loop to look for employee role
    for (let i = 0; i < arr.length; i++) {
        
        // check if manager
        if (arr[i].officeNumber) {
            role = arr[i].getRole();
            generateManagerCard(role, arr[i]);
        }
        // check if engineer
        else if (arr[i].github) {
            role = arr[i].getRole();

            generateEngineerCard(role, arr[i]);
        }
        // check if intern
        else if (arr[i].school) {
            role = arr[i].getRole();

           generateInternCard(role, arr[i]);
        }
        else{
            return `Error: Role for employee was returned undefined. Please start over.`;
        }

        if(i === arr.length-1) {
            timeOuts();
        }
    }
};

const finalTemplate = arr => { 
    htmlString = template1;
    for (let i = 0; i < arr.length; i++){
        htmlString = htmlString + arr[i];

        if (i === arr.length - 1) {
            htmlString = htmlString + template2;
        }
    }
};

const timeOuts = () => {
    setTimeout(() => {
        finalTemplate(cardArr);
    }, 1000);

    setTimeout(() => {
        writeHtml(htmlString);
    }, 2000);
};

module.exports = createCards;