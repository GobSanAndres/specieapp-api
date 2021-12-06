const { Schema, model } = require('mongoose');

const SectionFormSchema = Schema(
    {
        description: {
            type: String,
            required: true
        },
        form_available: {
            required: true,
            type: Schema.Types.ObjectId,
            ref: 'FormAvailable'
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

module.exports = model('SectionForm', SectionFormSchema);