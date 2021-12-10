const { Schema, model } = require('mongoose');

const ActivitiesSchema = Schema(
    {
        site: {
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
        actives: {
            type: Number,
            required: true
        },
        samples: {
            type: Number,
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

module.exports = model('Activities', ActivitiesSchema);