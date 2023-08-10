import Centro from "../models/Centro.js"

//get
const getCentro = async (req,res)=>{
    try {
        const {hasta=3,desde}= req.query
        const query = {estado:true}

        const [total,centros] = await Promise.all([
            Centro.countDocuments(query),
            Centro.find(query)
                .skip(Number(desde))
                .limit(Number(hasta))
        ])

        res.json({
            total,
            centros
        })

    } catch (error) {
        console.log(error);
    }
}

//post
const postCentro = async (req,res)=>{
    try {
        const {nombre,descripcion,ciudad} = req.body
        const centros = new Centro({nombre,descripcion,ciudad}) 

        await centros.save()
        res.json(centros)
    
    } catch (error) {
        console.log(error);
    }
}

//delete
const deleteCentro = async (req,res)=>{
    try {
        const {id} =req.params
        const centros = await Centro.findByIdAndUpdate(id,{estado:false})
        res.json(centros)
    } catch (error) {
        console.log(error);
    }
}


//put
const putCentro = async (req,res)=>{
    try {

        const {id} = req.params

      
        const centros = await Centro.findByIdAndUpdate(id,req.body,{new:true})
        res.json(centros)
        
    } catch (error) {
        console.log(error);
    }
}

export {getCentro,postCentro,putCentro,deleteCentro}


