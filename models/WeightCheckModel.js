const { Schema, model } = require('mongoose');

const WeightCheckSpeciesSchema  = Schema({
    specie: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    }
});

const WeightCheckSchema = Schema(
    {
        place: {
            type: String,
            required: true
        },
        motonave: {
            type: String,
            required: true
        },
        create_by: {
            type: Schema.Types.ObjectId,
            ref: 'Usuario',
            required: true
        },
        weight_check_species: [{ type: WeightCheckSpeciesSchema, require: true }],
        signatureRegister: {
            type: String,
            required: true
        },
        signatureInstitution: {
            type: String,
            required: true
        },
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

module.exports = model('WeightCheck', WeightCheckSchema);