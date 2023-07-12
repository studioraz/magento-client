const MagentoClient = require('../dist').default;

const magentoClient = new MagentoClient({
    username: 'studioraz',
    password: 'hU9uOSYXxSaaE3FGu4mo'
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
