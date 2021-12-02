const { Schema, model } = require('mongoose');

const ActivitiesSchema = Schema(
    {
        site: {
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
        actives: {
            type: Number,
            required: true
        },
        samples: {
            type: Number,
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

module.exports = model('Activities', ActivitiesSchema);