const MagentoClient = require('../dist').MagentoAdminClient;
require('dotenv').config()

const magentoClient = new MagentoClient({
    username: process.env.ADMIN_USERNAME,
    password: process.env.ADMIN_PASSWORD,
    basePath: process.env.BASE_PATH
});

magentoClient.setSysConfigs({
    postV1SrsysconfigConfigSetRequest : {
        "systemConfig" : {
            "default": {
                "payment/srcreditguard/active": 1
            }
        }
    }
}).then((response) => {
    console.log(response);
});







