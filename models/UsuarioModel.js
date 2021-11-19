const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema(
    {
        email:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        rol:{
            type: Schema.Types.ObjectId,
            ref: 'Rol'
        },
        state: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    {
        timestamps: true
    }
);

UsuarioSchema.methods.toJson = function () {
    const { __v, password, _id, ...user } = this.Object();
    user.uid = _id;
    return user;
}

module.exports = model('Usuario', UsuarioSchema);