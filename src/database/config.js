import mongoose from "mongoose"

const dbCnx = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("db conected");    
    } catch (error) {
        console.log(error);
    }
}

export default dbCnx

