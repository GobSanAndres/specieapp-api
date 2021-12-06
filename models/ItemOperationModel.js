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
    monitoring: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Monitoring'
    },
});

module.exports = model('ItemOperation', ItemOperationSchema);