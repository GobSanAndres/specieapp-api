const Joi = require('joi');

const MonitoringAgriculturalPricesCreate = Joi.object().keys({
    create_by: Joi.string().required(),
    registry_number: Joi.string().required(),
    business_name_establishment: Joi.string().required(),
    person_type: Joi.string().required(),
    localization: Joi.string().required(),
    nit: Joi.string().required(),
    identification_informant: Joi.string().required(),
    informant_name: Joi.string().required(),
    identification: Joi.string().required(),
    registration_of_price_of_agricultural_product: Joi.object().required(),
    issue_date: Joi.number().required(),
});

const MonitoringAgriculturalPricesUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    create_by: Joi.string().required(),
    registry_number: Joi.string().required(),
    business_name_establishment: Joi.string().required(),
    person_type: Joi.string().required(),
    localization: Joi.string().required(),
    nit: Joi.string().required(),
    identification_informant: Joi.string().required(),
    informant_name: Joi.string().required(),
    identification: Joi.string().required(),
    registration_of_price_of_agricultural_product: Joi.object().required(),
    issue_date: Joi.number().required(),
});

module.exports = {
    MonitoringAgriculturalPricesCreate,
    MonitoringAgriculturalPricesUpdate
}