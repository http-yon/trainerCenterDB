import jwt from "jsonwebtoken";

const generateJWT =(uid= '') =>{

    return new Promise ((resolve,reject)=>{
        const payload = {uid};
        jwt.sign(payload,process.env.SECRET_KEY, {
            expiresIn : '2h'
        }, (err, token)=>{
            if (err){
                console.log(err);
                reject ('error al generar jwt')
            } else {
                resolve(token)
            }
        })
    })
}

export default generateJWT