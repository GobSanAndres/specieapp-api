const Joi = require('joi');

const WeightCheckCreate = Joi.object().keys({
    place: Joi.string().required(),
    motorShip: Joi.string().required(),
    create_by: Joi.string().required(),
    weight_check_specie: Joi.array().required(),
    signatureRegister: Joi.string().required(),
    signatureInstitution: Joi.string().required(),
    issue_date: Joi.number().required(),
});

const WeightCheckUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    place: Joi.string().required(),
    motorShip: Joi.string().required(),
    create_by: Joi.string().required(),
    weight_check_specie: Joi.array().required(),
    signatureRegister: Joi.string().required(),
    signatureInstitution: Joi.string().required(),
    issue_date: Joi.number().required(),
});

module.exports = {
    WeightCheckCreate,
    WeightCheckUpdate
}
