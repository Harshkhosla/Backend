var jwt = require('jsonwebtoken');

const JWT_SECRET="harh$"

const fetchUser =(req,res,next)=>{
    const token = req.header('Authorization');
    console.log(token);
    if(!token){
        res.status(401).send({error:"you dont have token"})
    }try{
        const data=jwt.verify(token,JWT_SECRET)
        req.user =data.user;
        next(); 
    }catch(error){
        res.status(401).send({error:"kya kar rhahcca ha"})
    }
    
}

module.exports= fetchUser;