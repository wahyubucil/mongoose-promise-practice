require('../index');

const UserModel = require('../src/models/user');

const user = new UserModel();

user.fullName = 'Kankusai Watanabe';

console.log(user.toJSON());
console.log();
console.log(user.fullName);