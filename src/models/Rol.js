import mongoose from "mongoose";

const RoleSchema = mongoose.Schema({
    rol: {
        type: String,
        required : [true, 'El rol es Obligatorio']
    }
});

const Rol = mongoose.model('Rol', RoleSchema, "role");

export default Rol