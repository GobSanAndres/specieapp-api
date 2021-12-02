const { Schema, model } = require('mongoose');

const MeasuredEspeciesSchema  = Schema({
    specie: {
        type: String,
        required: true
    },
    width: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    weigth: {
        type: Number,
        required: true
    },
});

const MeasurementSchema = Schema(
    {
        site: {
            type: String,
            required: true
        },
        zone: {
            type: String,
            required: true
        },
        create_by: {
            type: String,
            required: true
        },
        art: {
            type: String,
            required: true
        },
        record_id: {
            type: Number,
            required: true
        },
        species: [MeasuredEspeciesSchema],
        is_active: {
            type: Boolean,
            required: true,
            default: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model('Measurement', MeasurementSchema);