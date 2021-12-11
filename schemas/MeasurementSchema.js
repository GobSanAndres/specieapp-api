const Joi = require('joi');

const MeasurementCreate = Joi.object().keys({
    site: Joi.string().required(),
    zone: Joi.string().required(),
    create_by: Joi.string().required(),
    art: Joi.string().required(),
    measured_species: Joi.array().required(),
    issue_date: Joi.string().required()
});

const MeasuremenUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    site: Joi.string().required(),
    zone: Joi.string().required(),
    create_by: Joi.string().required(),
    art: Joi.string().required(),
    measured_species: Joi.array().required(),
    issue_date: Joi.string().required()
});

module.exports = {
    MeasurementCreate,
    MeasuremenUpdate
}
