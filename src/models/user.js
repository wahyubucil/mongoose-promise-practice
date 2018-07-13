const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});

userSchema.virtual('fullName').get(function() {
    return this.firstName + ' ' + this.lastName;
});

userSchema.virtual('fullName').set(function(name) {
    const str = name.split(' ');

    this.firstName = str[0];
    this.lastName = str[1];
});

module.exports = mongoose.model('User', userSchema);