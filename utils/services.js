const { getUser } = require("../utils/getUser");
const { Interface } = require("../constants/actionLogs");
const ActionLog = require("../models/ActionLogModel");

const saveActionLog = async(Data, req, action, info, type, isAuth) => {
    const { modelName} = Data;
    let user = {};
    if(isAuth == undefined) user = {user: await getUser(req)} ;
    const objectAction = { ...user, model: modelName, action, interface: Interface.web, info, type};
    const data = new ActionLog(objectAction);
    data.save();
}

module.exports = {
    saveActionLog
}