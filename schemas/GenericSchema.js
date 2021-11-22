const Joi = require("joi");

const GenericDisable = Joi.object().keys({
    id: Joi.string().required(),
    disable: Joi.boolean().required()
});

module.exports = {
    GenericDisable
}