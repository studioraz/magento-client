const { string } = require('fast-glob/out/utils');
const { QuoteCartManagementV1Api } = require('../src');
const MagentoClient = require('../dist').default;
require('dotenv').config();

const magentoClient = new MagentoClient({
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  basePath: process.env.BASE_PATH
});

describe('Customer Account', () => {
  test('can create a customer account', async() => {

    // create a random customer data
    const random = Math.floor(Math.random() * 9000) + 1000;

    const customerDataRequest = {
      "customer": {
        "email": "api-test" + random + "@studioraz.co.il",
        "firstname": "api-test",
        "lastname": "api-test",
        "addresses": [
          {
            "firstname": "api-test",
            "lastname": "api-test",
            "countryId": "IL",
            "street": ["string" ],
            "telephone": "string",
            "postcode": "string",
            "city": "string",
            "defaultShipping": true,
            "defaultBilling": true
          }
        ]
      },
      "password": "qwaszx1234$"
    };

    const customer = await magentoClient.createCustomerAccount({
        postV1CustomersRequest : customerDataRequest
    });

    expect(customer).toHaveProperty('id');


    const token = await magentoClient.generateCustomerToken({
      postV1IntegrationAdminTokenRequest: {
        "username": customerDataRequest.customer.email,
        "password": customerDataRequest.password
      }
    });

    expect(typeof token).toBe('string');


    magentoClient.QuoteCartManagementV1Api = new QuoteCartManagementV1Api();

    // TODO: create a quote

    // TODO: add product to quote



  });
});







