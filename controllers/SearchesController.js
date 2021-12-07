const { response } = require('express');

const Module = require('../models/ModuleModel');
const FormAvailable = require('../models/FormAvailableModel');
const SectionForm = require('../models/SectionFormModel');
const QuestionForm = require('../models/QuestionFormModel');

const getSearch = async(req, res = response) => {

    const table = req.params.table;
    const search = req.params.search;
    const since = Number(req.query.since) || 0;
    const limit = Number(req.query.limit) || 0;

    let module = [];
    let availableForms = [];
    let sectionForms = [];

    let idOfTheForms = [];

    switch (table) {
        case 'module':
            const moduleResult = await Module.find({ code: search })
                                                    .sort({ date: -1 })
                                                    .skip(since)
                                                    .limit(limit);

            module = moduleResult;                                       

            if( moduleResult.length > 0 ){
                const resultAvailableForms = await FormAvailable.find({ module: moduleResult[0]._id })
                .sort({ date: -1 })
                .populate('module')
                .skip(since)
                .limit(limit);

                for (let i = 0; i < resultAvailableForms.length; i++) { 
                    idOfTheForms.push(resultAvailableForms[i]._id);
                }

                availableForms = resultAvailableForms;

                if( resultAvailableForms.length > 0 ){
                    const resultSectionForms = await SectionForm.find({ form_available: { $in: idOfTheForms } })
                    .sort({ date: -1 })
                    .populate('form_available')
                    .skip(since)
                    .limit(limit);
    
                    sectionForms = resultSectionForms;
                }
            }
            
            break;

        default:
            return res.status(400).json({
                ok: false,
                msg: 'Esta url no existe'
            });
    }

    res.json({
        ok: true,
        module,
        availableForms,
        sectionForms
    });

};


module.exports = {
    getSearch
};