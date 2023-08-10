import { check } from "express-validator";
import express from "express";
import { getCamper,postCamper,putCamper,deleteCamper } from "../controllers/camper.controllers.js";
import validateDocuments from "../middlewares/validateDocuments.js";
import { validarJWT } from "../middlewares/validate.JWT.js";
import { camperValido } from "../helpers/dbValidators.js";
import { isGerenteRole, isTrainerRole, isTrainerorGerenteRole, tipoIdentificacionValida } from "../middlewares/validateRole.js";

const camperRouter = express.Router()

camperRouter.get("/",getCamper)
camperRouter.post("/",[
    validarJWT,
    tipoIdentificacionValida,
    check("NroIdentificacion","debe tener maximo 10 caracteres").isLength({max:10}),
    check("nombre","no puede estar vacio").not().isEmpty(),
    check("password","debe tener minimo 8 caracteres").isLength({min:8}),
    check("email","debe ser un email valido").isEmail(),
    isTrainerorGerenteRole,
    isTrainerRole,
    
    validateDocuments
],postCamper)


camperRouter.put("/:id",[
    validarJWT,
    check("id","debe ser id valida").isMongoId(),
    check("id","no existe").custom(camperValido),
    isTrainerorGerenteRole,
    //levelstate
    //duracion
    validateDocuments
],putCamper)



camperRouter.delete("/:id",[
    validarJWT,
    isGerenteRole,
    check("id","debe ser id valida").isMongoId(),
    check("id","no existe").custom(camperValido),
    
    validateDocuments
],deleteCamper)

export default camperRouter