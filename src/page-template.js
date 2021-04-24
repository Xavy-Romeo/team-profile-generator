const createPage = arr => {
    console.log('hi. creating page');
    const array = `hi ${arr[0].firstName}`;
    console.log(array)
};

module.exports = createPage;