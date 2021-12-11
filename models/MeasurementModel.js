const { Schema, model } = require('mongoose');

const MeasuredSpeciesSchema  = Schema({
    specie: {
        type: String,
        required: true
    },
    longitud: {
        type: String,
        required: true
    },
    frecuency: {
        type: String,
        required: true
    }
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
        measured_specie: [{ type: MeasuredSpeciesSchema, require: true }],
        issue_date: {
            type: Number,//epoch
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