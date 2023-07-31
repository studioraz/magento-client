const MagentoClient = require('../dist').MagentoAdminClient;
require('dotenv').config();

const magentoClient = new MagentoClient({
  username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD,
  basePath: process.env.BASE_PATH
});

describe('Customer Account', () => {
  test('can create a customer account', () => {

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

    magentoClient.createCustomerAccount({
      postV1CustomersRequest : customerDataRequest
    }).then((response) => {
      expect(response.id).toBe('string');
    });
  });
});







