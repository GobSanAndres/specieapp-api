const { Schema, model } = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const WeightCheckSpeciesSchema  = Schema({
    size: {
        type: Number,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true,
        enum: ['Macho', 'Hembra']
    },
    ovate: {
        type: Boolean,
        required: true
    },
    observations: {
        type: String,
        required: false
    },
});


const NamesPeopleSamplingSchema = Schema({
    name: {
        type: String,
        required: true
    }
});

const SpinyLobsterSWCheckSchema = Schema(
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
        products_below_size: {
            type: Boolean,
            required: true
        },
        number_of_ovate_females: {
            type: Number,
            required: true
        },
        number_of_tails_below_size: {
            type: Number,
            required: true
        },
        total_weight: {
            type: Number,
            required: true
        },
        names_people_sampling: [{ type: NamesPeopleSamplingSchema, required: true }],
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

module.exports = model('SpinyLobsterSWCheck', SpinyLobsterSWCheckSchema);