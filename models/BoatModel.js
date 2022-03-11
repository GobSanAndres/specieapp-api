const { Schema, model } = require('mongoose');

const  BoatSchema = Schema(
    {
        description: {
            type: String,
            required: false
        },
        matricula: {
            type: String,
            required: true
        },
        is_active: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model('Boat', BoatSchema);