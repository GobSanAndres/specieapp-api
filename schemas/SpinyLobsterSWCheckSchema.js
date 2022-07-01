const Joi = require('joi');

const SpinyLobsterSWCheckCreate = Joi.object().keys({
    place: Joi.string().required(),
    motorShip: Joi.string().required(),
    create_by: Joi.string().required(),
    weight_check_specie: Joi.array().required(),
    signatureRegister: Joi.string().required(),
    signatureInstitution: Joi.string().required(),
    issue_date: Joi.number().required(),
});

const SpinyLobsterSWCheckUpdate = Joi.object().keys({
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
    SpinyLobsterSWCheckCreate,
    SpinyLobsterSWCheckUpdate
}
