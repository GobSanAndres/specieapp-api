const { Schema, model } = require('mongoose');

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
        catch_landed: {
            type: String,
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