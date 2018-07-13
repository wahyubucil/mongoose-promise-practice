require('../index');

const EmailModel = require('../src/models/email');

const promise = EmailModel.find({ email: 'cool.test@email.com' }).exec();

promise.then(doc => {
        console.log(doc);
    })
    .catch(err => {
        console.err(err);
    });