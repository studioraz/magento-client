const MagentoClient = require('../dist').MagentoAdminClient;
require('dotenv').config()

const magentoClient = new MagentoClient({
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    basePath: process.env.BASE_PATH
});

magentoClient.getCategories({}).then((response) => {
    console.log(response);
});
