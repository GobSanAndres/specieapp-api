const Joi = require('joi');

const RolCreate = Joi.object().keys({
            code: Joi.string().required(),
            name: Joi.string().required()
        })
    

module.exports = {
    RolCreate
}
