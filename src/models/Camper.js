import {Schema, model} from "mongoose";

const camperSchema = Schema({
    nombre:{
        type:String,
        required:[true,"nombre is required "]
    },

    tipoIdentificacion:{
        type:String,
        required:[true,"tipoIdentidficacion is required "]
    },

    NroIdentificacion:{
        type:Number,
        required:[true,"nroIdentificacion is required "]
    },

    email:{
        type:String,
        required:[true,"email is required "],
        unique:true
    },

    password:{
        type:String,
        required:[true,"password is required "]
    },

    level:{
        type:Schema.Types.ObjectId,
        ref:"Level",
        required:[true,"level is required "],
    },

    levelState:{
        type:String,
        required:[true,"levelState is required "]
    },

    estado:{
        type:Boolean,
        required:[true,"estado is required "],
        default:true
    },

    promedio:{
        type:Number,
        required:[true,"promedio is required "]
    },

    rol:{
        type:String,
        required:[true,"rol is required "],
        default:"camperRol"
    },

    imagen:{
        type:String,
        required:[true,"imagen is required "]
    }

    
})



const Camper = model("Camper",camperSchema,"camper")


export default Camper