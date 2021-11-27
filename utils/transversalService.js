const getAllService = (Data, req, res, order) => {
    const { page } = req.params;

    Data.find({ is_active: true}).sort(order).exec((error, data) => {
        if(error)
            return res.status(400).json({
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
            
            res.status(200).json({
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

const getPricipalRegister = (Principal, Secondary, req, res, keyPrincipal) => {
    try{
        const { id } = req.params;

        Principal.find({ [keyPrincipal]: id, is_active: true }, 
            async(error, dataPrincipal) => {
                if(error){
                    return res.status(400).json({
                        success: false,
                        error
                    })
                }else{
                    const dataSecondary = await Secondary.find({ site_id: dataPrincipal[0]._id, is_active: true });
                    console.log("Data ", dataPrincipal[0]);
                    res.status(200).json({
                        success: true,
                        message: "Consulta exitosa",
                        dataPrincipal,
                        dataSecondary
                    })
                    
                }
            }
        )
    }catch(error){
        return res.status(400).json({
            success: false,
            error
        })
    }
}

const listService = async(Data, req, res, isPopulate) => {
    try{
        const { limit = 10, from = 0, active } = req.query;
        const query = { is_active: active != undefined ? active : true };

        let populate = isPopulate;
        if(isPopulate == null)
            populate = "";

        const [ total, items ] = await Promise.all([
            Data.countDocuments(query),
            Data.find(query)
                .populate(populate)
                .skip(Number(from))
                .limit(Number(( limit )))
        ]);

        res.status(200).json({
            success: true,
            total,
            items
        })
    }catch(error){
        return res.status(400).json({
           success: false,
            error
        })
    }
    
}

const disableService = (Data, req, res) => {
    try{
        const { id, is_active } = req.body;

        Data.findByIdAndUpdate(id, { is_active: is_active},
            (error) => {
                if(error)
                    return res.status(400).json({
                        success: false,
                        error
                    })
                else
                    return res.status(200).json({
                       success: true,
                        message: `Elemento ${!is_active ? "deshabilitado" : "habilitado"} exitosamente`
                    })
            }
        )

    }catch(error){
        return res.status(200).json({
            success: false,
            error
        })
    }
}

const updateService = (Data, req, res) => {
    try{
        const update = req.body;
        
        Data.findByIdAndUpdate(update._id, update,
            (error) => {
                if(error)
                    return res.status(400).json({
                        success: false,
                        error
                    })
                else
                    return res.status(200).json({
                        success: true,
                        message: "Actualización exitosa"
                    })
            }
        )

    }catch(error){
        return res.status(400).json({
            success: false,
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
                return res.status(400).json({
                    success: false,
                    error
                })
        else
            return res.status(200).json({
                success: true,
                message: "Actualización exitosa",
                _id: saved._id
            })
        })

    }catch(error){
        return res.status(400).json({
            success: false,
            error
        })
    }
}

module.exports = {
    getAllService,
    disableService,
    updateService,
    createService,
    listService,
    getPricipalRegister
}