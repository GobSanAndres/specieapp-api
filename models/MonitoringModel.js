const { Schema, model } = require('mongoose');

const ItemOperationSchema  = Schema({
    gasoline_oneday: {
        type: String,
        required: false
    },
    other_oneday: {
        type: String,
        required: false
    },
    groceries_higherday: {
        type: String,
        required: false
    },
    ice_higherday: {
        type: String,
        required: false
    },
    gasoline_higherday: {
        type: String,
        required: false
    },
    bait_higherday: {
        type: String,
        required: false
    },
});

const LandedCatchSchema  = Schema({
    specie: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
});

const HandLineSchema  = Schema({
    method: {
        type: String,
        required: true
    },
    hook: {
        type: String,
        required: true
    }
});

const NasaSchema  = Schema({
    type: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    }
});

const ReelSchema  = Schema({
    quantity_reel: {
        type: String,
        required: true
    },
    quantity_hooks: {
        type: String,
        required: true
    }
});

const MonitoringSchema = Schema(
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
        departure_date: {
            type: Number,
            required: true
        },
        arrival_date: {
            type: Number,
            required: true
        },
        name_ship: {
            type: String,
            required: true
        },
        pr: {
            type: Boolean,
            required: true
        },
        type_motor: {
            type: String,
            required: true
        },
        quantity_motor:{
            type: String,
            required: true
        },
        power:{
            type: String,
            required: true
        },
        fishermen_number: {
            type: String,
            required: true
        },
        handLine:[{
            type: HandLineSchema,
            required: false
        }],
        nasa:[{
            type: NasaSchema,
            required: false
        }],
        reel:{
            type: ReelSchema,
            required: false
        },
        diving: {
            type: String,
            required: true
        },
        departure_time: {
            type: Number,
            required: true
        },
        arrival_time: {
            type: Number,
            required: true
        },
        schedule: {
            type: Boolean,
            required: true
        },
        landed_catch: [{ type: LandedCatchSchema, require: true }],
        observation: {
            type: String,
            required: true
        },
        value_state: {
            type: String,
            required: true,
            enum: ['E', 'N', 'F', 'D']
        },
        operating_expense: { type: ItemOperationSchema, require: true },
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

module.exports = model('Monitoring', MonitoringSchema);