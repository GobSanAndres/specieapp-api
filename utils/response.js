const { statusCode, typeError } = require("../constants/response");

const sendDataResponse = (res, message, data) => {
    return res.status(statusCode.success).json({
        success: true,
        message,
        ...data
    });
}

const genericResponse = (res, message) => {
    return res.status(statusCode.success).json({
        success: true,
        message
    })
}

const internalError = (res, error) => {
    return res.status(statusCode.internalError).json({
        success: false,
        typeError: typeError.internalError,
        error
     })
}

const badRequestError = (res, error) => {
    return res.status(statusCode.badRequest).json({
        success: false,
        typeError: typeError.tecnico,
        error
    })
}


module.exports = {
    internalError,
    genericResponse,
    sendDataResponse,
    badRequestError
}