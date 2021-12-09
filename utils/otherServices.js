const { message } = require("../constants/response");
const { sendDataResponse, genericResponse, internalError, badRequestError } = require("../utils/response");

const listService = async(Data, req, res, isPopulate, isPopulate2) => {
    try{
        const { limit = 10, from = 0, active } = req.query;
        const query = { is_active: active != undefined ? active : true };

        let populate = isPopulate;
        let populate2 = isPopulate2;
        
        if(isPopulate == null){
            populate = "";
        }
        
        console.log(populate2);
        if(isPopulate2 == null){
            populate2 = "";
        }

        const [ total, items ] = await Promise.all([
            Data.countDocuments(query),
            Data.find(query)
                .populate(populate)
                .populate(populate2)
                .skip(Number(from))
                .limit(Number(( limit )))
        ]);
        sendDataResponse(res, message.list, { total, items });
    }catch(error){
        internalError(res, error);
    }
    
}

module.exports = {
    listService
}