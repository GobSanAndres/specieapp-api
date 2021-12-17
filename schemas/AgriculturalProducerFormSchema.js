const Joi = require('joi');

const AgriculturalProducerFormCreate = Joi.object().keys({
    register_number: Joi.string().required(),
    kind_person: Joi.number().required(),
    gender: Joi.string().required(),
    create_by: Joi.string().required(),
    nit: Joi.string().required(),
    location: Joi.number().required(),
    identification_type: Joi.string().required(),
    property_name: Joi.string().required(),
    principal_activity: Joi.number().required(),
    self_consumption: Joi.number().required(),
    income_generation: Joi.number().required(),
    form_ternure: Joi.number().required(),
    surface: Joi.number().required(),
    water_resource: Joi.number().required(),
    cultivation_system: Joi.number().required(),
    crops_produced: Joi.array().required(),
    livestock_inventory: Joi.object().required(),
    issue_date: Joi.number().required()
});

const AgriculturalProducerFormUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    register_number: Joi.string().required(),
    kind_person: Joi.number().required(),
    gender: Joi.string().required(),
    create_by: Joi.string().required(),
    nit: Joi.string().required(),
    location: Joi.number().required(),
    identification_type: Joi.string().required(),
    property_name: Joi.string().required(),
    principal_activity: Joi.number().required(),
    self_consumption: Joi.number().required(),
    income_generation: Joi.number().required(),
    form_ternure: Joi.number().required(),
    surface: Joi.number().required(),
    water_resource: Joi.number().required(),
    cultivation_system: Joi.number().required(),
    crops_produced: Joi.array().required(),
    livestock_inventory: Joi.object().required(),
    issue_date: Joi.number().required()
});

module.exports = {
    AgriculturalProducerFormCreate,
    AgriculturalProducerFormUpdate
}
