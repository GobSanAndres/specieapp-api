const Joi = require('joi');

const MeasuredSpeciesCreate = Joi.object().keys({
    specie: Joi.string().required(),
    width: Joi.number().required(),
    measurement: Joi.string().required(),
    quantity: Joi.number().required(),
    status: Joi.string().required(),
    weigth: Joi.number().required()
});

const MeasuredSpeciesUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    specie: Joi.string().required(),
    width: Joi.number().required(),
    measurement: Joi.string().required(),
    quantity: Joi.number().required(),
    status: Joi.string().required(),
    weigth: Joi.number().required()
});

module.exports = {
    MeasuredSpeciesCreate,
    MeasuredSpeciesUpdate
}
