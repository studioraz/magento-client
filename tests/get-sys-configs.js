const MagentoClient = require('../dist').default;
require('dotenv').config()

const magentoClient = new MagentoClient({
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    basePath: process.env.BASE_PATH
});

magentoClient.getSysConfigs({
    postV1SrsysconfigConfigGetRequest : {
        "systemConfig" : {
            "default": {
                "payment/srcreditguard/active": null,
                "payment/srcreditguard/terminal_number": null,
                "payment/srcreditguard/payment_action": null,
                "payment/srcreditguard/api_username": null
            }
        }
    }
}).then((response) => {
    console.log(response);
});
