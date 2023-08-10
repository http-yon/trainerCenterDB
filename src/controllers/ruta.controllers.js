import Ruta from "../models/Ruta.js"

//get
const getRuta = async (req,res)=>{
    try {
        const {hasta,desde}= req.query
        const query = {estado:true}

        const [total,rutas] = await Promise.all([
            Ruta.countDocuments(query),
            Ruta.find()
                .populate("centro","nombre")
                .skip(Number(desde))
                .limit(Number(hasta))
        ])

        res.json({
            total,
            rutas
        })

    } catch (error) {
        console.log(error);
    }
}

//post
const postRuta = async (req,res)=>{
    try {
        const {nombre,centro} = req.body
        const rutas = new Ruta({nombre,centro}) 

        await rutas.save()
        res.json(rutas)
    
    } catch (error) {
        console.log(error);
    }
}

//delete
const deleteRuta = async (req,res)=>{
    try {
        const {id} =req.params
        const rutas = await Ruta.findByIdAndUpdate(id,{estado:false})
        res.json(rutas)
    } catch (error) {
        console.log(error);
    }
}


//put
const putRuta = async (req,res)=>{
    try {

        const {id} = req.params
        const {estado, ...resto} = req.body

      
        const rutas = await Ruta.findByIdAndUpdate(id,resto,{new:true})
        res.json(rutas)
        
    } catch (error) {
        console.log(error);
    }
}

export {getRuta,postRuta,putRuta,deleteRuta}


