import mongoose from "mongoose";

const rutaSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"nombre is required "]
    },

    centro:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Centro",
        required:[true,"centro is required "]
    }
})

const Ruta = mongoose.model("Ruta",rutaSchema,"ruta")

export default Ruta