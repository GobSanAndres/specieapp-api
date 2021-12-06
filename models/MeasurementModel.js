const { Schema, model } = require('mongoose');

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
            required: false
        },
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