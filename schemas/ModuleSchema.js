const Joi = require('joi');

const ModuleCreate = Joi.object().keys({
    description: Joi.string().required(),
    icon: Joi.string().required(),
});

const ModuleUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    description: Joi.string().required(),
    icon: Joi.string().required(),
});

module.exports = {
    ModuleCreate,
    ModuleUpdate
}
