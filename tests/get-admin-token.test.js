const MagentoClient = require('../dist').default;
require('dotenv').config();

const magentoClient = new MagentoClient({
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    basePath: process.env.BASE_PATH
});

describe('Admin Token', () => {
    test('can get admin token', () => {
        magentoClient.generateAccessToken({
            postV1IntegrationAdminTokenRequest : {
                username: process.env.USERNAME,
                password: process.env.PASSWORD
            }
        }).then((response) => {
            expect(typeof response).toBe('string');
        });
    });
});







