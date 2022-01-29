const { response, request } = require("express");
const bycryptjs = require('bcryptjs');

const User = require("../models/UsuarioModel");
const { Actions } = require("../constants/actionLogs");
const { message } = require("../constants/response");

const { generateJWT } = require("../helpers/generar-jwt");
const { sendDataResponse, internalError, badRequestError } = require("../utils/response");

const Auth = async(req = request, res = response) => {
    const { email, password } = req.body;

    try{
        const user = await User.findOne({email});
        if(!user){
            badRequestError(res, "Email invalido", { "Data": User, req, action: Actions.auth, object: `Email: ${email}`, isAuth: true });
            return
        }
        if(!user.is_active){
            badRequestError(res, "is_active invalido", { "Data": User, req, action: Actions.auth, object: `Email: ${email}`, isAuth: true });
            return
        }
        const validPassword = bycryptjs.compareSync(password, user.password);

        if(!validPassword){
            badRequestError(res, "Invalid Password", { "Data": User, req, action: Actions.auth, object: `Email: ${email}`, isAuth: true });
            return
        }
        const token = await generateJWT(user.id);

        const objectData = {
            statusCode: 200,
            token,
            user: {
                id: user._id,
                email: user.email
            }
        }

        sendDataResponse(res, message.list, objectData, { "Data": User, req, action: Actions.auth, object: `Email: ${email}`, isAuth: true })        

    }catch(error){
        internalError(res, error, { "Data": User, req, action: Actions.auth, isAuth: true });
    }
}

module.exports = {
    Auth
}