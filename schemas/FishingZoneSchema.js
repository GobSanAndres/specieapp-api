const Joi = require('joi');

const FishingZoneCreate = Joi.object().keys({
    description: Joi.string().required(),
});

const FishingZoneUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    description: Joi.string().required(),
});

module.exports = {
    FishingZoneCreate,
    FishingZoneUpdate
}
