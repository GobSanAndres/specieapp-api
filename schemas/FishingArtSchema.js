const Joi = require('joi');

const FishingArtCreate = Joi.object().keys({
    description: Joi.string().required(),
});

module.exports = {
    FishingArtCreate
}
