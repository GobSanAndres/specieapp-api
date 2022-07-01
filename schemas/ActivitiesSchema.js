const Joi = require('joi');

const ActivitiesCreate = Joi.object().keys({
    site: Joi.string().required(),
    create_by: Joi.string().required(),
    art: Joi.string().required(),
    active: Joi.number().required(),
    sample: Joi.number().required(),
    issue_date: Joi.number().required(),
    observation: Joi.string()
});

const ActivitiesUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    site: Joi.string().required(),
    create_by: Joi.string().required(),
    art: Joi.string().required(),
    active: Joi.number().required(),
    sample: Joi.number().required(),
    issue_date: Joi.number().required(),
    observation: Joi.string()
});

module.exports = {
    ActivitiesCreate,
    ActivitiesUpdate
}
