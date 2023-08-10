import { check } from "express-validator";
import express from "express";
import { getCentro,postCentro,putCentro,deleteCentro } from "../controllers/centro.controllers.js";
import { validarJWT } from "../middlewares/validate.JWT.js";
import { isGerenteRole } from "../middlewares/validateRole.js";

const centroRouter = express.Router()

centroRouter.get("/",getCentro)


centroRouter.post("/",[
    validarJWT,
    check("nombre","no puede estar vacio").not().isEmpty(),
    isGerenteRole
] ,postCentro)


centroRouter.put("/:id",[
    validarJWT
],putCentro)


centroRouter.delete("/:id",[
    validarJWT
],deleteCentro)

export default centroRouter