const { Schema, model } = require('mongoose');

const MeasuredSpeciesSchema  = Schema({
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
    weight: {
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
            type: Schema.Types.ObjectId,
            ref: 'Usuario',
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
        measured_species: [{ type: MeasuredSpeciesSchema, require: true }],
        issue_date: {
            type: String,//epoch
            required: true
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