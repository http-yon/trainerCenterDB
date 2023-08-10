
import { response, request } from 'express';
import jwt from 'jsonwebtoken';
import Camper from '../models/Camper.js';


const validarJWT = async(req = request,res = response,next) => {
    const token = req.header('api-token');


    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {
        

        const {uid} = jwt.verify( token, process.env.SECRET_KEY );


         const campers = await Camper.findById( uid );

        if( !campers ) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe DB'
            })
        } 

        // Verificar si el uid tiene estado true
         if ( !campers.estado ) {
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado: false'
            })
        } 
        
        
        req.campers = campers; 
        console.log("req usuario en validate",req.usuario);
        next();

    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }


}

export {
    validarJWT
}


