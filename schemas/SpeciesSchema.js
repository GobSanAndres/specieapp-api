const Joi = require('joi');

const SpeciesCreate = Joi.object().keys({
    common_name: Joi.string().required(),
    scientific_name: Joi.string().required(),
});

module.exports = {
    SpeciesCreate
}
