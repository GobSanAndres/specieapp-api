const { response, request } = require("express");

const Data = require("../models/MonitoringModel");

const { disableService, updateService, createService } = require("../utils/transversalService");
const { listService } = require("../utils/otherServices");


const create = (req = request, res = response) => {
    createService(Data, req, res);
}

const update = (req = request, res = response) => {
    updateService(Data, req, res);
}

const disable = (req = request, res = response) => {
    disableService(Data, req, res);
}

const getAll = (req = request, res = response) => {
    listService(Data, req, res, "create_by", "fishing_art", "fishing_technique");
}

module.exports = {
    create,
    getAll,
    update,
    disable
}