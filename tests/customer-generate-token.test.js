const { MagentoAdminClient,  MagentoCustomerClient } = require('../dist');


require('dotenv').config();

describe('Customer Magento Client', () => {

  test('generate customer token', async () => {

    const adminClient = new MagentoAdminClient({
      username: process.env.ADMIN_USERNAME,
      password: process.env.ADMIN_PASSWORD,
      basePath: process.env.BASE_PATH
    });


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

    console.log('EMAIL: ' + customerDataRequest.customer.email);

    await adminClient.createCustomerAccount({
      postV1CustomersRequest : customerDataRequest
    }).then((response) => {
      expect(typeof response.id).toBe('number');
    });


    const customerClient = new MagentoCustomerClient({
      username: customerDataRequest.customer.email,
      password: customerDataRequest.password,
      basePath: process.env.BASE_PATH
    });


    // create a customer quote
    const quoteId = await customerClient.createQuote();

    //console.log('quoteId: ' + quoteId);

    expect(typeof quoteId).toBe('number');

    const quote = await customerClient.getQuote();

    //console.log(quote);

    // add product to quote
    const items = await customerClient.addQuoteItems({
      postV1CartsQuoteIdItemsRequest: {
        "cartItem": {
          "sku": "product_dynamic_1",
          "qty": 10,
          "quote_id": quoteId
        }
      }
    });

    //console.log(items);

    expect(typeof items).toBe('object');

  }, 20000);

});




