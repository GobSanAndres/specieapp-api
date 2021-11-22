const Joi = require('joi');

const WebSiteCreate = Joi.object().keys({
    title: Joi.string().required(),
    slogan: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().required(),
    footer: Joi.string().required(),
    domain: Joi.string().required(),
    color_schemes: Joi.object().required(),
    pages: Joi.array().required(),
    social_links: Joi.array().required()
});

const WebSiteUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    title: Joi.string().required(),
    slogan: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().required(),
    footer: Joi.string().required(),
    domain: Joi.string().required(),
    color_schemes: Joi.object().required(),
    pages: Joi.array().required(),
    social_links: Joi.array().required()
});
   

module.exports = {
    WebSiteCreate,
    WebSiteUpdate
}