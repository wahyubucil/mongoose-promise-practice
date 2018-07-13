require('../index');

const EmailModel = require('../src/models/email');

EmailModel
    .findOneAndUpdate(
        {
            email: 'cool.test@email.com' // search query
        },
        {
            email: 'awesome.test@email.com' // field:values to update
        },
        {
            new: true, // return updated doc
            runValidators: true // validate before update
        }
    )
    .then(doc => {
        console.log(doc);
    })
    .catch(err => {
        console.error(err);
    });