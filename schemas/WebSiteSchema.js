const Joi = require('joi');

const WebSiteCreate = Joi.object().keys({
    title: Joi.string().required(),
    slogan: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().required(),
    footer: Joi.string().required(),
    domain: Joi.string().required(),
    color_schemes: Joi.string().required(),
    pages: Joi.string().required(),
    social_links: Joi.string().required(),
});

const WebSiteUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    title: Joi.string().required(),
    slogan: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().required(),
    footer: Joi.string().required(),
    domain: Joi.string().required(),
    color_schemes: Joi.string().required(),
    pages: Joi.string().required(),
    social_links: Joi.string().required(),
});
   

module.exports = {
    WebSiteCreate,
    WebSiteUpdate
}