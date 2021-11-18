const getAllService = (Data, req, res, order) => {
    const { page } = req.params;

    Data.find({ state: true}).sort(order).exec((error, data) => {
        if(error)
            return res.json({
                statusCode: 400,
                success: false,
                error
            })
        else{
            const validPage = page != undefined && page > 0 ? page : 1;
            const totalResult = data.length;
            const residuo = totalResult%10;
            let totalPages = totalResult/10;
            const dataSend = data.splice(validPage * 10 - 10, 10);

            if(residuo > 0)
                totalPages = Math.trunc(totalPages) + 1;
            
            res.json({
                statusCode: 200,
                success: true,
                message: "Consulta exitosa",
                totalResult,
                totalPages,
                data: dataSend,
                page
            })
        }
    })
}

const disableService = (Data, req, res) => {
    try{
        const { id, disable } = req.body;

        Data.findByIdAndUpdate(id, { state: !disable},
            (error) => {
                if(error)
                    return res.json({
                        statusCode: 400,
                        success: false,
                        error
                    })
                else
                    return res.json({
                        statusCode: 200,
                        success: true,
                        message: `Elemento ${disable ? "deshabilitado" : "habilitado"} exitosamente`
                    })
            }
        )

    }catch(error){
        return res.json({
            statusCode: 400,
            success: true,
            error
        })
    }
}

const updateService = (Data, req, res) => {
    try{
        const update = req.body;
        const { id } = update;

        Data.findByIdAndUpdate(id, update,
            (error) => {
                if(error)
                    return res.json({
                        statusCode: 400,
                        success: false,
                        error
                    })
                else
                    return res.json({
                        statusCode: 200,
                        success: true,
                        message: "Actualización exitosa"
                    })
            }
        )

    }catch(error){
        return res.json({
            statusCode: 400,
            success: true,
            error
        })
    }
}

const createService = (Data, req, res) => {
    try{
        const requestBody = req.body;
        const data = new Data(requestBody);

        data.save(function(error, saved){
            if(error)
                return res.json({
                    statusCode: 400,
                    success: false,
                    error
                })
        else
            return res.json({
                statusCode: 200,
                success: true,
                message: "Actualización exitosa",
                _id: saved._id
            })
        })

    }catch(error){
        return res.json({
            statusCode: 400,
            success: true,
            error
        })
    }
}

module.exports = {
    getAllService,
    disableService,
    updateService,
    createService
}