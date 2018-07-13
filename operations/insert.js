require('../index');

const EmailModel = require('../src/models/email');
const msg = new EmailModel({
    email: 'cool.test@email.com'
});

msg.save()
    .then(doc => {
        console.log(doc);
    })
    .catch(err => {
        console.error(err);
    });