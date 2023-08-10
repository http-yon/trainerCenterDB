import { check } from "express-validator";
import express from "express";
import { getLevel,postLevel,putLevel,deleteLevel } from "../controllers/level.controllers.js";
import { validarJWT } from "../middlewares/validate.JWT.js";
import validateDocuments from "../middlewares/validateDocuments.js";
import { levelValido } from "../helpers/dbValidators.js";
import { isTrainerOrCamperRole, isTrainerRole } from "../middlewares/validateRole.js";

const levelRouter = express.Router()

levelRouter.get("/",getLevel)

levelRouter.post("/",[
    check("nombre","campo obligatorio").not().isEmpty(),
    validarJWT,
    validateDocuments

],postLevel)
levelRouter.put("/:id",[
    validarJWT,
    check("id","debe ser id valida").isMongoId(),
    check("id","no existe").custom(levelValido),
    isTrainerOrCamperRole,
    validateDocuments
] ,putLevel)


levelRouter.delete("/:id",[
    validarJWT,
    isTrainerRole,
    check("id","debe ser id valida").isMongoId(),
    check("id","no existe").custom(levelValido),

    validateDocuments
] ,deleteLevel)

export default levelRouter