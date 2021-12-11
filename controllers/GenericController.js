const { response, request } = require("express");
const { message } = require("../constants/response");
const { sendDataResponse, internalError, badRequestError } = require("../utils/response");

const Boat = require("../models/BoatModel");
const Species = require("../models/SpeciesModel");
const FishingArea = require("../models/FishingAreaModel");
const FishingArt = require("../models/FishingArtModel");
const FishingMethod = require("../models/FishingMethodModel");
const Propulsion = require("../models/PropulsionMethodModel");
const FishingSite = require("../models/FishingSiteModel");

const { GenericSave } = require("../constants/generic");
const Activitie = require("../models/ActivitiesModel");
const Measurement = require("../models/MeasurementModel");
const Monitore = require("../models/MonitoringModel");
const WeightCheck = require("../models/WeightCheckModel");

const getData = async (req = request, res = response) => {
    try{
        const boats = await Boat.find({is_active: true});
        const species = await Species.find({is_active: true});
        const areas = await FishingArea.find({is_active: true});
        const arts = await FishingArt.find({is_active: true});
        const methods = await FishingMethod.find({is_active: true});
        const propulsions = await Propulsion.find({is_active: true});
        const sites = await FishingSite.find({is_active: true});

        res.status(200).json({
            success: true,
            message: "Consulta exitosa",
            boats,
            species,
            areas,
            arts,
            methods,
            propulsions,
            sites
        })
            
            
    }catch(error) {
        return res.status(400).json({
            success: false,
            error
        })
    }

}

const saveData = (req = request, res = response) => {
    try{
        const requestBody = req.body;

        const ModelGeneric = GenericSave[requestBody.idFormulario];
        
        if(ModelGeneric != undefined){
            const data = new ModelGeneric(requestBody);

            data.save(function(error, saved){
                if(error)
                    badRequestError(res, error);
                else
                    sendDataResponse(res, message.create, { _id: saved._id });
            })
        }else
            badRequestError(res, error);
        

    }catch(error){
        internalError(res, error);
    }
}

const historicByUser = (req = request, res = response) => {
    try{
        const requestBody = req.body;

        const { idUser } = requestBody;

        const activities = Activitie.find({is_active: true, create_by: idUser});
        const measurement = Measurement.find({is_active: true, create_by: idUser});
        const monitoring = Monitore.find({is_active: true, create_by: idUser});
        const weightCheck = WeightCheck.find({is_active: true, create_by: idUser});
        
        res.status(200).json({
            success: true,
            message: "Consulta exitosa",
            formats: [
                {
                    name: "Formato de actividades",
                    data: activities
                },
                {
                    name: "Formato de tallas",
                    data: measurement
                },
                {
                    name: "Formato de Monitoreo",
                    data: monitoring
                },
                {
                    name: "Formato de verificación de peso",
                    data: weightCheck
                }
            ]
        })

    }catch(error){
        internalError(res, error);
    }
}

module.exports = {
    getData,
    saveData,
    historicByUser
}




