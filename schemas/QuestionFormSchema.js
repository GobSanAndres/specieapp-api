const Joi = require('joi');

const QuestionFormCreate = Joi.object().keys({
    description: Joi.string().required(),
    widget_type: Joi.string().required(),
    datatype: Joi.string().required(),
    required: Joi.boolean().required(),
    min: Joi.number(),
    max: Joi.number(),
    regex: Joi.string(),
    section_form: Joi.string().required(),
});

const QuestionFormUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    description: Joi.string().required(),
    widget_type: Joi.string().required(),
    datatype: Joi.string().required(),
    required: Joi.boolean().required(),
    min: Joi.number(),
    max: Joi.number(),
    regex: Joi.string(),
    section_form: Joi.string().required(),
});

module.exports = {
    QuestionFormCreate,
    QuestionFormUpdate
}
