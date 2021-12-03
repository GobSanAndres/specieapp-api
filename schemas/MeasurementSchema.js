const Joi = require('joi');

const MeasurementCreate = Joi.object().keys({
    site: Joi.string().required(),
    zone: Joi.string().required(),
    create_by: Joi.string().required(),
    art: Joi.string().required(),
    record_id: Joi.number(),
    species: Joi.any().required()
});

const MeasuremenUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    site: Joi.string().required(),
    zone: Joi.string().required(),
    create_by: Joi.string().required(),
    art: Joi.string().required(),
    record_id: Joi.number(),
    species: Joi.any().required()
});

module.exports = {
    MeasurementCreate,
    MeasuremenUpdate
}
