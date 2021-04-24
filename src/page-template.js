// const createPage = arr => {
//     const array = `hi ${arr[0].firstName}`;
//     console.log(array)
// };

const generatePage = arr => {
    const length = arr.length;

    generateEmployeeCards(arr);

};

const generateEmployeeCards = arr => {
    for (let i=0; arr.length; i++){
        return `
        <div class="card">
        
            <div class="card-header">
                ${arr[i].firstName}
            </div>
        
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID ${arr[i].id}</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
        
        </div>
        `
    }
}

const generateHtml = arr => {
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>

        <main>
            // container to hold employee cards
            <div id=employee-cards>
                ${generateEmployeeCards}
            </div>
        </main>
    </body>
    </html>
    `
};

module.exports = generateHtml;