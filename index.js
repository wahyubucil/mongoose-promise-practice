require('dotenv').config();
const mongoose = require('mongoose');
require('./src/database');
mongoose.Promise = global.Promise;

const emailModel = require('./src/models/email');
const msg = new emailModel({
    email: 'cool.test@email.com'
});