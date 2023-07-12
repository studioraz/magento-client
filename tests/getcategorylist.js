const MagentoClient = require('../dist').default;

const magentoClient = new MagentoClient({
    username: 'studioraz',
    password: 'hU9uOSYXxSaaE3FGu4mo'
    //accessToken : "eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOjEsInV0eXBpZCI6MiwiaWF0IjoxNjg5MTUxMzQ4LCJleHAiOjE2ODkxNTQ5NDh9.QzRNy4Q2KDDSXJRJo-Vn-Pw4cePsN_uXN3QfXN7PIqk"
});

magentoClient.getCategories({}).then((response) => {
    console.log(response);
});
