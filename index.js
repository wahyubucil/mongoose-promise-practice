require('dotenv').config();
const mongoose = require('mongoose');
require('./src/database');

// Native promises
// mongoose.Promise = global.Promise;

// set Promise provider to bluebird
mongoose.Promise = require('bluebird');