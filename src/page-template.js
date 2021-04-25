const generateHtml = arr => {
    
    return `
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
                ${generateCards(arr)}
            </section>    
        </main>
    
        
    </body>
    </html>
    `
};

const generateCards = arr => {
    if (arr.length === 1) { 
        return `
                <!--Card 1-->
                <div class="card" id="card1">
                
                    <div class="card-header">
                        ${arr[0].firstName} ${arr[0].lastName}
                        
                        <div class="sub-title">
                            ${arr[0].title}
                        </div>
                    </div>
                
                    <div class="list">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${arr[0].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${arr[0].email}">${arr[0].email}</a></li>
                            <li class="list-group-item">Office Number: ${arr[0].officeNumber}</li>
                        </ul>
                    </div>
                </div>
        `;
    }
    else if (arr.length === 2) {
        return `
                <!--Card 1-->
                <div class="card" id="card1">
                
                    <div class="card-header">
                        ${arr[0].firstName} ${arr[0].lastName}
                        
                        <div class="sub-title">
                            ${arr[0].title}
                        </div>
                    </div>
                
                    <div class="list">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${arr[0].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${arr[0].email}">${arr[0].email}</a></li>
                            <li class="list-group-item">Office Number: ${arr[0].officeNumber}</li>
                        </ul>
                    </div>
                </div>

                <!--Card 2-->
                <div class="card" id="card2">
                
                    <div class="card-header">
                        ${arr[1].firstName} ${arr[1].lastName}
                        
                        <div class="sub-title">
                            ${arr[1].title}
                        </div>
                    </div>
                
                    <div class="list">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${arr[1].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${arr[1].email}">${arr[1].email}</a></li>
                            <li class="list-group-item">${generateInfo(arr, 1)}</li>
                        </ul>
                    </div>
                </div>
        `;
    }
    else if (arr.length === 3) {
        return `
                <!--Card 1-->
                <div class="card" id="card1">
                
                    <div class="card-header">
                        ${arr[0].firstName} ${arr[0].lastName}
                        
                        <div class="sub-title">
                            ${arr[0].title}
                        </div>
                    </div>
                
                    <div class="list">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${arr[0].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${arr[0].email}">${arr[0].email}</a></li>
                            <li class="list-group-item">Office Number: ${arr[0].officeNumber}</li>
                        </ul>
                    </div>
                </div>

                <!--Card 2-->
                <div class="card" id="card2">
                
                    <div class="card-header">
                        ${arr[1].firstName} ${arr[1].lastName}
                        
                        <div class="sub-title">
                            ${arr[1].title}
                        </div>
                    </div>
                
                    <div class="list">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${arr[1].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${arr[1].email}">${arr[1].email}</a></li>
                            <li class="list-group-item">${generateInfo(arr, 1)}</li>
                        </ul>
                    </div>
                </div>

                <!--Card 3-->
                <div class="card" id="card3">
                
                    <div class="card-header">
                        ${arr[2].firstName} ${arr[2].lastName}
                        
                        <div class="sub-title">
                            ${arr[2].title}
                        </div>
                    </div>
                
                    <div class="list">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${arr[2].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${arr[2].email}">${arr[2].email}</a></li>
                            <li class="list-group-item">${generateInfo(arr, 2)}</li>
                        </ul>
                    </div>
                </div>
        `;
    }
    else if (arr.length === 4) {
        return `
                <!--Card 1-->
                <div class="card" id="card1">
                
                    <div class="card-header">
                        ${arr[0].firstName} ${arr[0].lastName}
                        
                        <div class="sub-title">
                            ${arr[0].title}
                        </div>
                    </div>
                
                    <div class="list">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${arr[0].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${arr[0].email}">${arr[0].email}</a></li>
                            <li class="list-group-item">Office Number: ${arr[0].officeNumber}</li>
                        </ul>
                    </div>
                </div>

                <!--Card 2-->
                <div class="card" id="card2">
                
                    <div class="card-header">
                        ${arr[1].firstName} ${arr[1].lastName}
                        
                        <div class="sub-title">
                            ${arr[1].title}
                        </div>
                    </div>
                
                    <div class="list">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${arr[1].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${arr[1].email}">${arr[1].email}</a></li>
                            <li class="list-group-item">${generateInfo(arr, 1)}</li>
                        </ul>
                    </div>
                </div>

                <!--Card 3-->
                <div class="card" id="card3">
                
                    <div class="card-header">
                        ${arr[2].firstName} ${arr[2].lastName}
                        
                        <div class="sub-title">
                            ${arr[2].title}
                        </div>
                    </div>
                
                    <div class="list">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${arr[2].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${arr[2].email}">${arr[2].email}</a></li>
                            <li class="list-group-item">${generateInfo(arr, 2)}</li>
                        </ul>
                    </div>
                </div>

                <!--Card 4-->
                <div class="card" id="card4">
                
                    <div class="card-header">
                        ${arr[3].firstName} ${arr[3].lastName}
                        
                        <div class="sub-title">
                            ${arr[3].title}
                        </div>
                    </div>
                
                    <div class="list">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${arr[3].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${arr[3].email}">${arr[3].email}</a></li>
                            <li class="list-group-item">${generateInfo(arr, 3)}</li>
                        </ul>
                    </div>
                </div>
        `;
    }
    else if (arr.length === 5) {
        return `
                <!--Card 1-->
                <div class="card" id="card1">
                
                    <div class="card-header">
                        ${arr[0].firstName} ${arr[0].lastName}
                        
                        <div class="sub-title">
                            ${arr[0].title}
                        </div>
                    </div>
                
                    <div class="list">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${arr[0].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${arr[0].email}">${arr[0].email}</a></li>
                            <li class="list-group-item">Office Number: ${arr[0].officeNumber}</li>
                        </ul>
                    </div>
                </div>

                <!--Card 2-->
                <div class="card" id="card2">
                
                    <div class="card-header">
                        ${arr[1].firstName} ${arr[1].lastName}
                        
                        <div class="sub-title">
                            ${arr[1].title}
                        </div>
                    </div>
                
                    <div class="list">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${arr[1].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${arr[1].email}">${arr[1].email}</a></li>
                            <li class="list-group-item">${generateInfo(arr, 1)}</li>
                        </ul>
                    </div>
                </div>

                <!--Card 3-->
                <div class="card" id="card3">
                
                    <div class="card-header">
                        ${arr[2].firstName} ${arr[2].lastName}
                        
                        <div class="sub-title">
                            ${arr[2].title}
                        </div>
                    </div>
                
                    <div class="list">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${arr[2].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${arr[2].email}">${arr[2].email}</a></li>
                            <li class="list-group-item">${generateInfo(arr, 2)}</li>
                        </ul>
                    </div>
                </div>

                <!--Card 4-->
                <div class="card" id="card4">
                
                    <div class="card-header">
                        ${arr[3].firstName} ${arr[3].lastName}
                        
                        <div class="sub-title">
                            ${arr[3].title}
                        </div>
                    </div>
                
                    <div class="list">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${arr[3].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${arr[3].email}">${arr[3].email}</a></li>
                            <li class="list-group-item">${generateInfo(arr, 3)}</li>
                        </ul>
                    </div>
                </div>

                <!--Card 5-->
                <div class="card" id="card5">
                
                    <div class="card-header">
                        ${arr[4].firstName} ${arr[4].lastName}
                        
                        <div class="sub-title">
                            ${arr[4].title}
                        </div>
                    </div>
                
                    <div class="list">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${arr[4].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${arr[4].email}">${arr[4].email}</a></li>
                            <li class="list-group-item">${generateInfo(arr, 4)}</li>
                        </ul>
                    </div>
                </div>
        `;
    }
}

const generateInfo = (arr, index) => {
        if (arr[index].title === 'Manager') {
            return `Office Number: ${arr[index].officeNumber}`;
        }
        else if (arr[index].title === 'Engineer') {
            return `GitHub: <a href="https://github.com/${arr[index].github}" target="_blank">${arr[index].github}</a>`;
        }
        else if (arr[index].title === 'Intern') {
            return `School: ${arr[index].school}`;
        } 
};

module.exports = generateHtml;