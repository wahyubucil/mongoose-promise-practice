require('../index');

const EmailModel = require('../src/models/email');

EmailModel
    .find({
        email: 'cool.test@email.com'
    })
    .then(doc => {
        console.log(doc);
    })
    .catch(err => {
        console.err(err);
    });