import mongoose from "mongoose";

const centroSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"nombre is required "]
    },

    descripcion:{
        type:String,
        required:[true,"descripcion is required "]
    },

    estado:{
        type:Boolean,
        required:[true,"estado is required "],
        default:true
    },

    ciudad:{
        type:String,
        required:[true,"imagen is required "]
    }
})



const Centro = mongoose.model("Centro",centroSchema,"centro")


export default Centro