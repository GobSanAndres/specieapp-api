const { message } = require("../constants/response");
const { sendDataResponse, genericResponse, internalError, badRequestError } = require("../utils/response");

const listService = async(Data, req, res, isPopulate) => {
    try{
        let aditionQuery = req.aditionalQuery;
        if(typeof aditionQuery != "object"){
            aditionQuery = {};
        }
        const { limit = 10, from = 0, active } = req.query;
        const query = { is_active: active != undefined ? active : true, ...aditionQuery };

        const populate = {};
        if(isPopulate == null || isPopulate == undefined || typeof isPopulate != "object")
            for (let index = 0; index < 7; index++) {
                populate[`populate${index}`] = "";
                
            }
        else
            for (let index = 0; index < 7; index++) {
                if(isPopulate[`populate${index}`] == undefined)
                    populate[`populate${index}`] = "";
                else
                    populate[`populate${index}`] = isPopulate[`populate${index}`]
            }
        
        
        const [ total, items ] = await Promise.all([
            Data.countDocuments(query),
            Data.find(query)
                .populate(populate.populate0)
                .populate(populate.populate1)
                .populate(populate.populate2)
                .populate(populate.populate3)
                .populate(populate.populate4)
                .populate(populate.populate5)
                .populate(populate.populate6)
                .skip(Number(from))
                .limit(Number(( limit )))
        ]);
        sendDataResponse(res, message.list, { total, items });
    }catch(error){
        internalError(res, error);
    }
    
}

const disableService = (Data, req, res) => {
    try{
        const { id, is_active } = req.body;

        Data.findByIdAndUpdate(id, { is_active: is_active},
            (error) => {
                if(error)
                    badRequestError(res, error);
                else
                    genericResponse(res, is_active ? message.update : message.disable);
            }
        )

    }catch(error){
        internalError(res, error);
    }
}

const updateService = (Data, req, res) => {
    try{
        const update = req.body;
        
        Data.findByIdAndUpdate(update._id, update,
            (error) => {
                if(error)
                    badRequestError(res, error);
                else
                    genericResponse(res, message.update);
            }
        )

    }catch(error){
        internalError(res, error);
    }
}

const createService = (Data, req, res) => {
    try{
        const requestBody = req.body;
        const data = new Data(requestBody);

        data.save(function(error, saved){
            if(error)
                badRequestError(res, error);
            else
                sendDataResponse(res, message.create, { _id: saved._id });
        })

    }catch(error){
        internalError(res, error);
    }
}

module.exports = {
    disableService,
    updateService,
    createService,
    listService
}