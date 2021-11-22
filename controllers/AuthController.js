const { response, request } = require("express");
const bycryptjs = require('bcryptjs');

const User = require("../models/UsuarioModel");

const { generateJWT } = require("../helpers/generar-jwt");

const Auth = async(req = request, res = response) => {
    const { email, password } = req.body;

    try{
        const user = await User.findOne({email});
        if(!user)
            return res.json({
                statusCode: 400,
                success: false,
                message: "Email invalido"
            })
        
        if(!user.is_active)
            return res.json({
                statusCode: 400,
                success: false,
                message: "is_active invalido"
            });
        
        const validPassword = bycryptjs.compareSync(password, user.password);

        if(!validPassword)
            return res.json({
                statusCode: 400,
                success: false,
                message: "Invalid Password"
            });
        
        const token = await generateJWT(user.id);

        res.json({
            statusCode: 200,
            success: true,
            token
        });
    }catch(error){
        return res.json({
            statusCode: 400,
            success: false,
            error
        })
    }
}

module.exports = {
    Auth
}