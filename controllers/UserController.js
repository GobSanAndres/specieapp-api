const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/UsuarioModel');
const { disableService, listService, updateService } = require('../utils/transversalService');

const list = async(req = request, res = response) => {
    listService(User, req, res, {populate0: "rol"});
}

const create = (req = request, res = response) => {
    try{
        const { email, password, rol } = req.body;

        const usuario = new User({ email, password, rol});

        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync( password, salt);

        usuario.save(function(error, saved){
            if(error)
                return res.status(400).json({
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
        return res.status(400).json({
            statusCode: 401,
            success: false,
            error
        })
    }
}


const update =  async(req = request, res = response) => {
    try{
        const { _id, email, password, rol, ...resto } = req.body;

        if(password){
            const salt = bcryptjs.genSaltSync();
            resto.password = bcryptjs.hashSync(password, salt);

            const update = { ... req.body, password: resto.password};

            User.findByIdAndUpdate(_id, update,
                (error) => {
                    if(error)
                        return res.status(400).json({
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
        }else
            updateService(User, req, res);

        
    }catch(error){
        return res.status(400).json({
            statusCode: 400,
            success: false,
            error
        })
    }
}

const changePassword = async(req = request, res = response) => {
    const { email, currentPassword, newPassword } = req.body;

    try{
        const user = await User.findOne({email});
        if(!user)
            return res.status(400).json({
                statusCode: 400,
                success: false,
                message: "Email invalido"
            })
        
        if(!user.is_active)
            return res.status(400).json({
                statusCode: 400,
                success: false,
                message: "is_active invalido"
            });
        
        const validPassword = bcryptjs.compareSync(currentPassword, user.password);
        
        if(!validPassword)
            return res.status(400).json({
                statusCode: 400,
                success: false,
                message: "Invalid Password"
            });
        
        if(newPassword){
            const salt = bcryptjs.genSaltSync();
            
            const hashPassword = bcryptjs.hashSync(newPassword, salt);

            const update = { _id: user._id, email: user.email, rol: user.rol, password: hashPassword};

            User.findByIdAndUpdate(user._id, update,
                (error) => {
                    if(error)
                        return res.status(400).json({
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
        }
    
    }catch(error){
        return res.status(400).json({
            statusCode: 400,
            success: false,
            error
        })
    }
}


const disable = (req = request, res = response) => {
    disableService(User, req, res, null);
}

module.exports = {
    create,
    list,
    update,
    disable,
    changePassword
}