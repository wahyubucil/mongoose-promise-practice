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
        console.log(doc.created_at < doc.updated_at); // Check whether updated_at work or not
    })
    .catch(err => {
        console.error(err);
    });