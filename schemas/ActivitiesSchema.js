const Joi = require('joi');

const ActivitiesCreate = Joi.object().keys({
    site: Joi.string().required(),
    create_by: Joi.string().required(),
    art: Joi.string().required(),
    actives: Joi.number().required(),
    samples: Joi.number().required(),
    issue_date: Joi.string().required(),
    observations: Joi.string().required()
});

const ActivitiesUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    site: Joi.string().required(),
    create_by: Joi.string().required(),
    art: Joi.string().required(),
    actives: Joi.number().required(),
    samples: Joi.number().required(),
    issue_date: Joi.string().required(),
    observations: Joi.string().required()
});

module.exports = {
    ActivitiesCreate,
    ActivitiesUpdate
}
