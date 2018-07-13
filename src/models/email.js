const mongoose = require('mongoose');
const validator = require('validator');

const emailSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            validate: (value) => {
                return validator.isEmail(value);
            }
        }
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

module.exports = mongoose.model('Email', emailSchema);