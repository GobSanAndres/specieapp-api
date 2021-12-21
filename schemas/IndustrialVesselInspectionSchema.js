const Joi = require('joi');

const IndustrialVesselInspectionCreate = Joi.object().keys({
    code: Joi.string().required(),
    approval_date: Joi.number().required(),
    create_by: Joi.string().required(),
    general_information: Joi.object().required(),
    fishing_areas: Joi.array().required(),
    effort_characteristics_arts_methods: Joi.object().required(),
    transshipment_control: Joi.object().required(),
    control_sample_lobster: Joi.object().required(),
    observations: Joi.string().required(),
    signatureRegister: Joi.string().required(),
    signatureCaptainOrRepresentative: Joi.string().required(),
});

const IndustrialVesselInspectionUpdate = Joi.object().keys({
    _id: Joi.string().required(),
    code: Joi.string().required(),
    approval_date: Joi.number().required(),
    create_by: Joi.string().required(),
    general_information: Joi.object().required(),
    fishing_areas: Joi.array().required(),
    effort_characteristics_arts_methods: Joi.object().required(),
    transshipment_control: Joi.object().required(),
    control_sample_lobster: Joi.object().required(),
    observations: Joi.string().required(),
    signatureRegister: Joi.string().required(),
    signatureCaptainOrRepresentative: Joi.string().required(),
});

module.exports = {
    IndustrialVesselInspectionCreate,
    IndustrialVesselInspectionUpdate
}
