require('../index');

const UserModel = require('../src/models/user');

UserModel.getUsers()
    .then(docs => {
        console.log(docs);
    })
    .catch(err => {
        console.error(err);
    });