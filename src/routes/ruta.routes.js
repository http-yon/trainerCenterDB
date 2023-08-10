import { check } from "express-validator";
import express from "express";
import { getRuta,postRuta,putRuta,deleteRuta } from "../controllers/ruta.controllers.js";
import validateDocuments from "../middlewares/validateDocuments.js";
import { validarJWT } from "../middlewares/validate.JWT.js";
import { rutaValido } from "../helpers/dbValidators.js";
import { isGerenteRole, isTrainerRole } from "../middlewares/validateRole.js";

const rutaRouter = express.Router()

rutaRouter.get("/",getRuta)
rutaRouter.post("/",[
    check("nombre","campo obligatorio").not().isEmpty(),
    validateDocuments
] ,postRuta)



rutaRouter.put("/:id",[
    validarJWT,
    isTrainerRole,
    check("id","debe ser id valida").isMongoId(),
    check("id","no existe").custom(rutaValido),
    validateDocuments
] ,putRuta)



rutaRouter.delete("/:id",[
    validarJWT,
    isGerenteRole,
    check("id","debe ser id valida").isMongoId(),
    check("id","no existe").custom(rutaValido),
    validateDocuments
],deleteRuta)

export default rutaRouter