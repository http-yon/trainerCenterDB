import Level from "../models/Level.js"

//get
const getLevel = async (req,res)=>{
    try {
        const {hasta=5,desde}= req.query
        const query = {estado:true}

        const [total,levels] = await Promise.all([
            Level.countDocuments(query),
            Level.find()
                .populate("ruta","nombre")
                .skip(Number(desde))
                .limit(Number(hasta))
        ])

        res.json({
            total,
            levels
        })

    } catch (error) {
        console.log(error);
    }
}

//post
const postLevel = async (req,res)=>{
    try {
        const {nombre,ruta,duracion} = req.body
        const levels = new Level({nombre,ruta,duracion}) 

        await levels.save()
        res.json(levels)
    
    } catch (error) {
        console.log(error);
    }
}

//delete
const deleteLevel = async (req,res)=>{
    try {
        const {id} =req.params
        const levels = await Level.findByIdAndUpdate(id,{estado:false})
        res.json(levels)
    } catch (error) {
        console.log(error);
    }
}


//put
const putLevel = async (req,res)=>{
    try {

        const {id} = req.params
        const {estado, ...resto} = req.body

      
        const levels = await Level.findByIdAndUpdate(id,resto,{new:true})
            .populate("ruta","nombre")
        res.json(levels)
        
    } catch (error) {
        console.log(error);
    }
}

export {getLevel,postLevel,putLevel,deleteLevel}


