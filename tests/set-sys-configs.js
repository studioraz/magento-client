const MagentoClient = require('../dist').default;

const magentoClient = new MagentoClient({
    username: 'studioraz',
    password: 'hU9uOSYXxSaaE3FGu4mo'
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







