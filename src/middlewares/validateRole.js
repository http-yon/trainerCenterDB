

const tipoIdentificacionValida = ( req, res, next ) => {
   const { tipoIdentificacion } = req.campers;
   if ( tipoIdentificacion !== 'T.I' &&  tipoIdentificacion !== 'C.C'  ) {
       return res.status(401).json({
           msg: `tipo identificacion no valido`
       });
   }

   next();
}


const isTrainerRole = ( req, res, next ) => {
    
   const { rol } = req.campers;
   
   if ( rol !== 'trainerRol' ) {
       return res.status(401).json({
           msg: `no es trainerRol`
       });
   }

   next();
}

const isGerenteRole = ( req, res, next ) => {
    if ( !req.campers ) {
       return res.status(500).json({
           msg: 'Se quiere verificar el role sin validar el token primero'
       });
   } 

   const { rol } = req.campers;
   
   if ( rol !== 'gerenteRol' ) {
       return res.status(401).json({
           msg: `no es gerenteRol`
       });
   }

   next();
}



const isTrainerorGerenteRole = ( req, res, next ) => {
    console.log(req.body);
    if ( !req.campers ) {
       return res.status(500).json({
           msg: 'Se quiere verificar el role sin validar el token primero'
       });
   } 

   const { rol } = req.campers;
   
   if ( rol !== 'trainerRol' &&  rol !== 'gerenteRol') {
       return res.status(401).json({
           msg: `no es trainerRol ni gerenteRol`
       });
   }

   next();
}







const isTrainerOrCamperRole = ( req, res, next ) => {
    if ( !req.campers ) {
       return res.status(500).json({
           msg: 'Se quiere verificar el role sin validar el token primero'
       });
   } 

   const { rol } = req.campers;
   
   if ( rol !== 'trainerRol' &&  rol !== 'camperRol') {
       return res.status(401).json({
           msg: ` no es trainerRol ni camperRol`
       });
   }

   next();
}






export {
    tipoIdentificacionValida,
    isTrainerRole,
    isTrainerorGerenteRole,
    isGerenteRole,
    isTrainerOrCamperRole}