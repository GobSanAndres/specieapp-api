const { Schema, model } = require('mongoose');

const RolSchema = Schema(
    {
        code:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        estado: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model('Rol', RolSchema);