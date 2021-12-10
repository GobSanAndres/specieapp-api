const { Schema, model } = require('mongoose');

const ItemOperationSchema  = Schema({
    description: {
        type: String,
        required: true
    },
    unit: [{ type: String, require: true }],
    value: {
        type: Number,
        required: true
    },
    form_id: {
        type: Number,
        required: true
    },
});

const LandedCatchSchema  = Schema({
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
            type: String,
            required: true
        },
        departure_date: {
            type: Date,
            required: true
        },
        arrival_date: {
            type: Date,
            required: true
        },
        ship: {
            type: Number,
            required: true
        },
        fishermen_number: {
            type: Number,
            required: true
        },
        fishing_art: {
            required: true,
            type: Schema.Types.ObjectId,
            ref: 'FishingArt'
        },
        fishing_technique: {
            required: true,
            type: Schema.Types.ObjectId,
            ref: 'FishingTechnique'
        },
        value: {
            type: Number,
            required: true
        },
        departure_time: {
            type: Date,
            required: true
        },
        arrival_time: {
            type: Date,
            required: true
        },
        observations: {
            type: String,
            required: true
        },
        days: {
            type: Number,
            required: true
        },
        days_and_nigth: {
            type: Number,
            required: true
        },
        operating_expenses: [{ type: ItemOperationSchema, require: true }],
        landed_catch: [{ type: LandedCatchSchema, require: true }],
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