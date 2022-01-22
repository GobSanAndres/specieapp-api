const { request } = require("express");
const jwt = require("jsonwebtoken");

const User = require('../models/UsuarioModel');

const getUser = async (req =  request) => {
    const token = req.header('Authorization');

    const { uid } = jwt.verify(token, process.env.SECRET);

    const user = await User.findById(uid);

    return user;

}

module.exports = {
    getUser
}