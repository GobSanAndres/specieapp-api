const { Schema, model } = require('mongoose');
const { v4: uuidv4 } = require('uuid');

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
    },
});

const WeightCheckSchema = Schema(
    {
        register_number: {
            type: String,
            required: true,
            default: function() {
                return uuidv4();
            }
        },
        place: {
            type: Schema.Types.ObjectId,
            ref: 'FishingSite',
            required: true
        },
        motorShip: {
            type: Schema.Types.ObjectId,
            ref: 'Boat',
            required: true
        },
        create_by: {
            type: Schema.Types.ObjectId,
            ref: 'Usuario',
            required: true
        },
        weight_check_specie: [{ type: WeightCheckSpeciesSchema, required: true }],
        signatureRegister: {
            type: String,
            required: true
        },
        signatureInstitution: {
            type: String,
            required: true
        },
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

module.exports = model('WeightCheck', WeightCheckSchema);