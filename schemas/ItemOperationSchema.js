const Joi = require('joi');

const ItemOperationCreate = Joi.object().keys({
    description: Joi.string().required(),
    unit: Joi.array().required(),
    value: Joi.number().required(),
    form_id: Joi.number().required(),
    monitoring: Joi.string().required(),
});

const ItemOperationUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    description: Joi.string().required(),
    unit: Joi.array().required(),
    value: Joi.number().required(),
    form_id: Joi.number().required(),
    monitoring: Joi.string().required(),
});

module.exports = {
    ItemOperationCreate,
    ItemOperationUpdate
}
