import jwt from "jsonwebtoken";

export const auth = (req,res,next)=>{
    try{

        const {authorization} = req.headers;
       
        if(!authorization?.startsWith(process.env.BEARERKEY)){
            return res.json({message:"Invalid authorization"})
        }
       
        const token = authorization.split(process.env.BEARERKEY)[1];

        
    

    if(!token){
        return res.json({message:"token is required"});
    }
    const decoded = jwt.verify(token, process.env.LOGINTOKEN);

    req.id=decoded.id

    next();

        }catch(err){
            return res.json({message:"error occured",err});
        }
    
    
}