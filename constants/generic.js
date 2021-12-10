const Activitie = require("../models/ActivitiesModel");
const Measurement = require("../models/MeasurementModel");
const Monitore = require("../models/MonitoringModel");

const GenericSave = {
    "FO-MI-DP-03": Activitie,
    "1500-63.04": Measurement,
    "CAP-ES-PE-08": Monitore
}

module.exports = {
    GenericSave
}