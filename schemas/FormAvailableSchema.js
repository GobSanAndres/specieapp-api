const Joi = require('joi');

const FormAvailableCreate = Joi.object().keys({
    description: Joi.string().required(),
    code: Joi.string().required(),
    version: Joi.number().required(),
    approvalDate: Joi.date().required(),
    module: Joi.string().required()
});

const FormAvailableUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    description: Joi.string().required(),
    code: Joi.string().required(),
    version: Joi.number().required(),
    approvalDate: Joi.date().required(),
    module: Joi.string().required()
});

module.exports = {
    FormAvailableCreate,
    FormAvailableUpdate
}