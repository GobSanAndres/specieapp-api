const { response, request } = require("express");

const Data = require("../models/QuestionaryModel");
const Child = require("../models/SectionModel");

const {  getAllService, disableService, updateService, createService } = require("../utils/transversalService");


const create = (req = request, res = response) => {
    createService(Data, req, res);
}

const update = (req = request, res = response) => {
    updateService(Data, req, res);
}

const disable = (req = request, res = response) => {
    Child.find({ $and: [ { is_active: true }, { idQuestionary: req.body.id }]}).exec((error, data) => {
        if(error)
            return res.status(400).json({
                statusCode: 200,
                success: false,
                error
            })
        else{
            if(data.length > 0)
                return res.status(400).json({
                    statusCode: 200,
                    success: true,
                    message: "Sección creada con el Cuestionario relacionado"
                })
            else
                disableService(Data, req, res);
        }
    })
}

const getAll = (req = request, res = response) => {
    getAllService(Data, req, res, null);
}

module.exports = {
    create,
    getAll,
    update,
    disable
}
