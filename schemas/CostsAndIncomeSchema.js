const Joi = require('joi');

const CostsAndIncomeCreate = Joi.object().keys({
    propertyName: Joi.string().required(),
    registryNumber: Joi.string().required(),
    personType: Joi.string().required(),
    location: Joi.string().required(),
    nit: Joi.string().required(),
    productName: Joi.string().required(),
    gender: Joi.string().required(),
    identification_type: Joi.string().required(),
    production_expenses: Joi.array().required(),
    cultivation_sales: Joi.array().required(),
    total_product_sales: Joi.array().required(),
    income_different_products: Joi.array().required(),
    issue_date: Joi.number().required(),
});

const CostsAndIncomeUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    propertyName: Joi.string().required(),
    registryNumber: Joi.string().required(),
    personType: Joi.string().required(),
    location: Joi.string().required(),
    nit: Joi.string().required(),
    productName: Joi.string().required(),
    gender: Joi.string().required(),
    identification_type: Joi.string().required(),
    production_expenses: Joi.array().required(),
    cultivation_sales: Joi.array().required(),
    total_product_sales: Joi.array().required(),
    income_different_products: Joi.array().required(),
    issue_date: Joi.number().required(),
});

module.exports = {
    CostsAndIncomeCreate,
    CostsAndIncomeUpdate
}
