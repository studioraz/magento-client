const MagentoClient = require('../dist').default;

const magentoClient = new MagentoClient({
    username: 'studioraz',
    password: 'hU9uOSYXxSaaE3FGu4mo',
    accessToken: 'eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOjEsInV0eXBpZCI6MiwiaWF0IjoxNjg4NjY5MzUzLCJleHAiOjE2ODg2NzI5NTN9.jawAUKVh64BitXMYOJMF0CDRMjQIQxzEipaPVNbalU4'
});

/*
magentoClient.generateAccessToken({
    postV1IntegrationAdminTokenRequest : {
        username: 'studioraz',
        password: 'hU9uOSYXxSaaE3FGu4mo'
    }
}).then((response) => {
    response.raw.json().then((json) => {
        console.log(json);
    });
});
*/
magentoClient.getCategories({}).then((response) => {
    response.raw.json().then((json) => {
        console.log(json);
    });
});
