const MagentoClient = require('../dist').default;

const username = 'studioraz';
const password = 'hU9uOSYXxSaaE3FGu4mo';


const magentoClient = new MagentoClient({
    username: username,
    password: password
});

magentoClient.generateAccessToken({
    postV1IntegrationAdminTokenRequest : {
        username: username,
        password: password
    }
}).then((response) => {
    console.log(response);
});




