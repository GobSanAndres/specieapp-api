const { Schema, model } = require('mongoose');

const MeasuredSpeciesSchema  = Schema({
    specie: {
        type: String,
        required: true
    },
    width: {
        type: Number,
        required: true
    },
    measurement: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Measurement'
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    weigth: {
        type: Number,
        required: true
    },
});

module.exports = model('MeasuredSpecies', MeasuredSpeciesSchema);