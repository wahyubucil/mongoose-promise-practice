require('../index');

const EmailModel = require('../src/models/email');

EmailModel
    .findOneAndRemove({
        email: 'awesome.test@email.com'  
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });