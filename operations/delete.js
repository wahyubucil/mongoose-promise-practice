require('../index');

const EmailModel = require('../src/models/email');

const promise = EmailModel
                    .findOneAndRemove({
                        email: 'awesome.test@email.com'  
                    }).exec();

promise.then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });