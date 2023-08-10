import Camper from "../models/Camper.js";
import Level from "../models/Level.js";
import Ruta from "../models/Ruta.js";

const camperValido = async(id)=>{
    const existeCamper = await Camper.findById(id);
    if(!existeCamper){
            throw new Error(`no esta registrado en la base de datos`);
    }
}

const levelValido = async(id)=>{
    const existeLevel = await Level.findOne(id);
    if(!existeLevel){
            throw new Error(`no esta registrado en la base de datos`);
    }
}

const rutaValido = async(id)=>{
    const existeRuta = await Ruta.findOne(id);
    if(!existeRuta){
            throw new Error(`no esta registrado en la base de datos`);
    }
}



export {camperValido,levelValido,rutaValido}