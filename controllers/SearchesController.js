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

    if (isNaN(search)) {
        return res.status(400).json({
            ok: false,
            msg: 'Error con los parámetros de la consulta'
        });
    }

    let module = [];
    let availableForms = [];
    let sectionForms = [];
    let questionForms = [];

    let idOfTheForms = [];
    let sectionsId = [];

    switch (table) {
        case 'module':
            module = await Module.find({ $and: [{ code: search }, { is_active: true }] })
                .sort({ date: -1 })
                .skip(since)
                .limit(limit);

            if (module.length > 0) {
                availableForms = await FormAvailable.find({ $and: [{ module: module[0]._id }, { is_active: true }] })
                    .sort({ date: -1 })
                    .populate('module')
                    .skip(since)
                    .limit(limit);

                for (let i = 0; i < availableForms.length; i++) {
                    idOfTheForms.push(availableForms[i]._id);
                }

                //Creamos la función
                function addProperty(obj, data){
                    return Object.defineProperty(obj,'sectionForms',{value: data});
                }

                let newAvailableForms  = availableForms.map(function(num) {  

                    // if(num.formAvailables === undefined){
                    //     for(let i = 0; i < module.length; i++){
                    //         addProperty(num, "Hola Mundo");
                    //     }
                    // }

                    num.ejemplo = 'Hola Mundo';

                    return num;
                });

                console.log(newAvailableForms);

                if (availableForms.length > 0) {
                    sectionForms = await SectionForm.find({ $and: [{ form_available: { $in: idOfTheForms } }, { is_active: true }] })
                        .sort({ date: -1 })
                        .populate('form_available')
                        .skip(since)
                        .limit(limit);

                    for (let i = 0; i < sectionForms.length; i++) {
                        sectionsId.push(sectionForms[i]._id);
                    }

                    if (sectionForms.length > 0) {
                        questionForms = await QuestionForm.find({ $and: [{ section_form: { $in: sectionsId } }, { is_active: true }] })
                            .sort({ date: -1 })
                            .populate('section_form')
                            .skip(since)
                            .limit(limit);
                    }
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
        sectionForms,
        questionForms
    });

};


module.exports = {
    getSearch
};