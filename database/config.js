const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        //await mongoose.connect( process.env.MONGODB_CNN, {
        //await mongoose.connect( "mongodb+srv://userdb1:1q9LNv1E76KLKpRCdwtb@cluster0.lvcla.mongodb.net/test", {
            await mongoose.connect( "mongodb+srv://userdb1:1q9LNv1E76KLKpRCdwtb@cluster0.lvcla.mongodb.net/genericBack?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            /* useCreateIndex: true,
            useFindAndModify: false */
        });
        console.log("Base de datos online");
    } catch(error){
        console.log(error);
        throw new Error("Error a la hora de iniciar la base de datos");
    } 
}

module.exports = {
    dbConnection
}


