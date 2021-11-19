const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');


const { dbConnection } = require('../database/config');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.arrayPaths = [
            {
                path: "/v1/api/questionary",
                route: require("../routes/QuestionaryRoutes")
            }
        ];

        //Conectar a base de datos
        this.connectionDB();

        //Middlewares
        this.middlewares();

        this.routes();

        
    }

    async connectionDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: "/tmp/",
            createParentPath: true
        }));
    }

    routes(){
        this.arrayPaths.forEach(item => {
            this.app.use(item.path, item.route)
        })
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto ", this.port);
        });
    }

}

module.exports = Server;