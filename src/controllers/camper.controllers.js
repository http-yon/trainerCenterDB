import bcryptjs from "bcryptjs"
import Camper from "../models/Camper.js"

//get
const getCamper = async (req,res)=>{
    try {
        const {hasta=10,desde}= req.query
        const query = {estado:true}

        const [total,campers] = await Promise.all([
            Camper.countDocuments(query),
            Camper.find(query)
                .populate("level","nombre")
                .skip(Number(desde))
                .limit(Number(hasta))
        ])

        res.json({
            total,
            campers
        })

    } catch (error) {
        console.log(error);
    }
}

//post
const postCamper = async (req,res)=>{
    try {
        const {nombre,tipoIdentificacion,NroIdentificacion,email,password,level,levelState,imagen,promedio,rol} = req.body
        const campers = new Camper({nombre,tipoIdentificacion,NroIdentificacion,email,password,level,rol,levelState,imagen,promedio})
    
        const crypt = bcryptjs.genSaltSync()
        campers.password = bcryptjs.hashSync(password,crypt)

        await campers.save()
        res.json(campers)
    
    } catch (error) {
        console.log(error);
    }
}

//delete
const deleteCamper = async (req,res)=>{
    try {
        const {id} =req.params
        const campers = await Camper.findByIdAndUpdate(id,{estado:false})
        res.json(campers)
    } catch (error) {
        console.log(error);
    }
}


//put
const putCamper = async (req,res)=>{
    try {

        const {id} = req.params
        const {estado,password, ...resto} = req.body
        
        if (password) {
            const crypt = bcryptjs.genSaltSync()
            resto.password = bcryptjs.hashSync(password,crypt)
        }
        
        const campers = await Camper.findByIdAndUpdate(id,resto,{new:true})
        .populate("level","nombre")
        res.json(campers)
        
    } catch (error) {
        console.log(error);
    }
}

export {getCamper,postCamper,putCamper,deleteCamper}


