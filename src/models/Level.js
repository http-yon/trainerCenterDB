import mongoose from "mongoose";

const levelSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"nombre is required "]
    },

    ruta:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Ruta",
        required:[true,"ruta is required "]
    },

    duracion:{
        type:String,
        required:[true,"duracion is required "]
    }
})



const Level = mongoose.model("Level",levelSchema,"level")


export default Level