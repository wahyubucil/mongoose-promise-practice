require('dotenv').config();
const mongoose = require('mongoose');
require('./src/database');
mongoose.Promise = global.Promise;