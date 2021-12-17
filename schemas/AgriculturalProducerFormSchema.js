const Joi = require('joi');

const AgriculturalProducerFormCreate = Joi.object().keys({
    register_number: Joi.string().required(),
    kind_person: Joi.string().required(),
    gender: Joi.string().required(),
    create_by: Joi.string().required(),
    nit: Joi.string().required(),
    location: Joi.string().required(),
    identification_type: Joi.string().required(),
    property_name: Joi.string().required(),
    principal_activity: Joi.string().required(),
    self_consumption: Joi.string().required(),
    income_generation: Joi.string().required(),
    form_ternure: Joi.string().required(),
    surface: Joi.string().required(),
    water_resource: Joi.string().required(),
    cultivation_system: Joi.string().required(),
    crops_produced: Joi.array().required(),
    livestock_inventory: Joi.object().required(),
    issue_date: Joi.number().required()
});

const AgriculturalProducerFormUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    register_number: Joi.string().required(),
    kind_person: Joi.string().required(),
    gender: Joi.string().required(),
    create_by: Joi.string().required(),
    nit: Joi.string().required(),
    location: Joi.string().required(),
    identification_type: Joi.string().required(),
    property_name: Joi.string().required(),
    principal_activity: Joi.string().required(),
    self_consumption: Joi.string().required(),
    income_generation: Joi.string().required(),
    form_ternure: Joi.string().required(),
    surface: Joi.string().required(),
    water_resource: Joi.string().required(),
    cultivation_system: Joi.string().required(),
    crops_produced: Joi.array().required(),
    livestock_inventory: Joi.object().required(),
    issue_date: Joi.number().required()
});

module.exports = {
    AgriculturalProducerFormCreate,
    AgriculturalProducerFormUpdate
}
