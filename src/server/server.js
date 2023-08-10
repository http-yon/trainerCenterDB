import express from "express";
import dbCnx from "../database/config.js";
import camperRouter from "../routes/camper.routes.js";
import levelRouter from "../routes/level.routes.js";
import rutaRouter from "../routes/ruta.routes.js";
import centroRouter from "../routes/centro.routes.js";
import authRouter from "../routes/auth.routes.js";

class Servidor {

    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.camperPath = "/api/campers"
        this.levelsPath = "/api/levels"
        this.rutaPath = "/api/rutas"
        this.centroPath = "/api/centros"
        this.authPath = "/api/login"




        this.dbConexion()
        this.middlewares()
        this.routes()
        
    }

    async dbConexion(){
        await dbCnx()
    }

    middlewares(){
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.camperPath,camperRouter)
        this.app.use(this.levelsPath,levelRouter)
        this.app.use(this.rutaPath,rutaRouter)
        this.app.use(this.centroPath,centroRouter)
        this.app.use(this.authPath,authRouter)
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`server running on port ${this.port} `);
        })
    }
}

export default Servidor