const Joi = require('joi');

const SectionFormCreate = Joi.object().keys({
    description: Joi.string().required(),
    form_available: Joi.string().required(),
});

const SectionFormUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    description: Joi.string().required(),
    form_available: Joi.string().required(),
});

module.exports = {
    SectionFormCreate,
    SectionFormUpdate
}
