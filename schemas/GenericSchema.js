const Joi = require("joi");

const GenericDisable = Joi.object().keys({
    id: Joi.string().required(),
    is_active: Joi.boolean().required()
});

module.exports = {
    GenericDisable
}