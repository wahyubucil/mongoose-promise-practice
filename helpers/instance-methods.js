require('../index');

const UserModel = require('../src/models/user');

const user = new UserModel({
    firstName: 'Kankusai',
    lastName: 'Watanabe'
});

const initials = user.getInitials();

console.log(initials);