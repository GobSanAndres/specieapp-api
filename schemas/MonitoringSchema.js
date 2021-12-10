const Joi = require('joi');

const MonitoringCreate = Joi.object().keys({
    site: Joi.string().required(),
    zone: Joi.string().required(),
    create_by: Joi.string().required(),
    departure_date: Joi.date().required(),
    arrival_date: Joi.date().required(),
    ship: Joi.number().required(),
    fishermen_number: Joi.number().required(),
    fishing_art: Joi.string().required(),
    fishing_technique: Joi.string().required(),
    value: Joi.number().required(),
    departure_time: Joi.date().required(),
    arrival_time: Joi.date().required(),
    observations: Joi.string().required(),
    days: Joi.number().required(),
    days_and_nigth: Joi.number().required(),
    operating_expenses: Joi.array().required(),
    landed_catch: Joi.array().required(),
});

const MonitoringUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    site: Joi.string().required(),
    zone: Joi.string().required(),
    create_by: Joi.string().required(),
    departure_date: Joi.date().required(),
    arrival_date: Joi.date().required(),
    ship: Joi.number().required(),
    fishermen_number: Joi.number().required(),
    value: Joi.number().required(),
    departure_time: Joi.date().required(),
    arrival_time: Joi.date().required(),
    observations: Joi.string().required(),
    days: Joi.number().required(),
    days_and_nigth: Joi.number().required(),
    operating_expenses: Joi.array().required(),
    landed_catch: Joi.array().required(),
});

module.exports = {
    MonitoringCreate,
    MonitoringUpdate
}
