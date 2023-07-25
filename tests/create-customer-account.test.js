const MagentoClient = require('../dist').default;
require('dotenv').config();

const magentoClient = new MagentoClient({
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  basePath: process.env.BASE_PATH
});

describe('Customer Account', () => {
  test('can create a customer account', () => {

    // create a random customer data
    const random = Math.floor(Math.random() * 9000) + 1000;

    const customerDataRequest = {
      customer: {
        email: 'api-test' + random + '@studioraz.co.il',
        firstname: 'api-test' + random,
        lastname: 'api-test' + random,
      },
      password: 'qwaszx1234$'
    };

    magentoClient.createCustomerAccount({
      postV1CustomersRequest : customerDataRequest
    }).then((response) => {
      expect(response.id).toBe('string');
      expect(response.email).toBe('ssss');
    });
  });
});







