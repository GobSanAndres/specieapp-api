const { Schema, model } = require('mongoose');

const ModuleSchema = Schema(
    {
        description: {
            type: String,
            required: true
        },
        icon: {
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

module.exports = model('Module', ModuleSchema);