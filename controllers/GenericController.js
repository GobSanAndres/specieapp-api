const { response, request } = require("express");
const Boat = require("../models/BoatModel");
const Species = require("../models/SpeciesModel");
const FishingArea = require("../models/FishingAreaModel");
const FishingArt = require("../models/FishingArtModel");
const FishingMethod = require("../models/FishingMethodModel");
const Propulsion = require("../models/PropulsionMethodModel");
const FishingSite = require("../models/FishingSiteModel");

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

module.exports = {
    getData
}




