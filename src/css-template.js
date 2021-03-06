const generateCss = () => {
    return `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
        background-color: rgb(240, 235, 235);
    }

    header {
        background-color: rgb(197, 73, 73);
        color: rgb(240, 235, 235);
        height: 100px;
        text-align: center;
        margin: 0 0 25px 0;
    }

    header h1 {
        padding: 25px;
        font-size: 40px;
    }

    .cards-container{
        display: flex;
        flex-wrap: wrap;
        margin: 5px 20px;
        padding: 10px 250px;
        justify-content: center;
    }

    .card {
        margin: 15px;
        height: 320px;
        width: 320px;
        border: rgba(192, 192, 192, 0.3) solid 2px;
        border-radius: 3px;
        background-color: rgb(224, 218, 218);
        box-shadow: 5px 5px 5px rgb(71, 71, 71);
    }

    .card-header {
        background-color: rgb(34, 85, 238);
        color: rgb(240, 235, 235);
        padding: 15px;
        font-size: 20px;
        font-weight: bold;
    }

    .list {
        margin: 40px 20px;
        background-color: rgb(240, 235, 235);
    }

    .list-group {
        list-style-type: none; 
    }

    .list-group-item {
        border: rgb(192, 192, 192) solid 1px;
        padding: 15px 10px;
        font-size: 18px;
    }
    `;
};

module.exports = generateCss