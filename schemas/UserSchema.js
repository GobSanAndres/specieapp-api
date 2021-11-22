const Joi = require('joi');

const UserSchema = Joi.object().keys({
            email: Joi.string().required(),
            password: Joi.string().required(),
            rol: Joi.string().required()
        })
    

module.exports = {
    UserSchema
}

