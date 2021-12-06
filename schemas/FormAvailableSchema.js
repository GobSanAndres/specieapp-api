const Joi = require('joi');

const FormAvailableCreate = Joi.object().keys({
    description: Joi.string().required(),
    module: Joi.string().required()
});

const FormAvailableUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    description: Joi.string().required(),
    module: Joi.string().required()
});

module.exports = {
    FormAvailableCreate,
    FormAvailableUpdate
}