import {response} from 'express';
import Camper from '../models/Camper.js';
import bcryptjs from 'bcryptjs';
import generateJWT from '../helpers/generateJWT.js';


const login = async (req, res=response)=>{
    
    const {email, password} = req.body;
    
    try {
        const camper = await Camper.findOne({email});

        console.log(camper);

        if (!camper){
            return res.json({
                msg:"Camper no es correcto"
            })
        }

        if (!camper.estado){
            return res.json({
                msg:"estado inactivo"
            })
        }

        const passwordValida = bcryptjs.compareSync(password,camper.password)
        if (!passwordValida) {
            res.json({
                msg:"password incorrecta"
            })
        }
        
        const token = await generateJWT(camper.id)

        res.json({
            camper,
            token
        })
        
    } catch (error) {
        console.log(error);
        return res.json(error)
    }
}

export {login}