const { Schema, model } = require('mongoose');

const FormAvailableSchema = Schema({
    description: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    version: {
        type: Number,
        required: true
    },
    approvalDate: {
        type: Date,
        required: true
    },
    module: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Module'
    },
    is_active: {
        type: Boolean,
        required: true,
        default: true
    }
}, {
    timestamps: true
});

module.exports = model('FormAvailable', FormAvailableSchema);