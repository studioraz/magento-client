const MagentoClient = require('../dist').default;
require('dotenv').config()

const magentoClient = new MagentoClient({
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    basePath: process.env.BASE_PATH
});

magentoClient.generateAccessToken({
    postV1IntegrationAdminTokenRequest : {
        username: process.env.USERNAME,
        password: process.env.PASSWORD
    }
}).then((response) => {
    console.log(response);
});




