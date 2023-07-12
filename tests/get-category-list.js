const MagentoClient = require('../dist').default;

const magentoClient = new MagentoClient({
    username: 'studioraz',
    password: 'hU9uOSYXxSaaE3FGu4mo'
});

magentoClient.getCategories({}).then((response) => {
    console.log(response);
});
