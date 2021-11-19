const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/UsuarioModel');
const { disableService, listService } = require('../utils/transversalService');

const list = async(req = request, res = response) => {
    listService(User, req, res);
}

const create = (req = request, res = response) => {
    try{
        const { email, password, rol } = req.body;

        const usuario = new User({ email, password, rol});

        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync( password, salt);

        usuario.save(function(error, saved){
            if(error)
                return res.json({
                    statusCode: 400,
                    success: false,
                    error
                })
            else
                return res.json({
                    statusCode: 200,
                    success: true,
                    message: "Registro creado exitosamente",
                    _id: saved._id
                })
        })
    }catch(error){
        return res.json({
            statusCode: 401,
            success: false,
            error
        })
    }
}


const update =  async(req = request, res = response) => {
    try{
        const { id } = req.params;
        const { _id, email, password, rol, ...resto } = req.body;

        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);

        User.findByIdAndUpdate(id, resto,
            (error) => {
                if(error)
                    return res.json({
                        statusCode: 400,
                        success: false,
                        error
                    })
                else
                    return res.json({
                        statusCode: 200,
                        success: true,
                        message: "Actualización exitosa"
                    })
            }
        
        );
    }catch(error){
        return res.json({
            statusCode: 400,
            success: false,
            error
        })
    }
}


const disable = (req = request, res = response) => {
    disableService(User, req, res);
}

module.exports = {
    create,
    list,
    update,
    disable
}