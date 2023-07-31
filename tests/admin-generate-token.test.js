const MagentoAdminClient = require('../dist').MagentoAdminClient;
require('dotenv').config();

const magentoClient = new MagentoAdminClient({
    username: process.env.ADMIN_USERNAME,
    password: process.env.ADMIN_PASSWORD,
    basePath: process.env.BASE_PATH
});

describe('Admin Token', () => {
    test('can get admin token', () => {
        magentoClient.generateAccessToken({
            postV1IntegrationAdminTokenRequest : {
                username: process.env.ADMIN_USERNAME,
                password: process.env.ADMIN_PASSWORD,
            }
        }).then((response) => {
            expect(typeof response).toBe('string');
        });
    });
});







