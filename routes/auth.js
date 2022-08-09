const express = require('express');
const UserSignin =require('../modules/UserSignin');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt  =require('jsonwebtoken')
var fetchUser= require('../middleware/fetchuser')
const JWT_SECRET="harh$"


router.post ('/createuser',[
  body('name','what dude').isLength({ min: 3 }),
  body('email').isEmail(),
  body('password').isLength({ min: 2}),
],async(req,res)=>{
  let success =false;
  const error = validationResult(req);
  if (!error.isEmpty()) {
    success=false;
    return res.status(400).json({ error: error.array() });
  }
  try{
  let user =await UserSignin.findOne({email:req.body.email});
  if (user){
      return res.status(400).json({error:"Sorry user already exists "})
  }
  const salt = await bcrypt.genSalt(10);
  const secPas= await bcrypt.hash(req.body.password,salt)
   user=await UserSignin.create({
      name: req.body.name,
      email: req.body.email,
      password: secPas
    })
    const data = {
      user:{
        id:user.id
      }
    }
    success= true;
    const message=`${req.body.name} account was created `;
    const authtoken =jwt.sign(data,JWT_SECRET);
    // console.log(authtoken) 
    res.json({authtoken,message,success}) 
  }catch(error){
      console.error(error.message);
      res.status(500).send("backend ki error")
  }
  //   .then(user => res.json(user));
})


router.post ('/login',[
  body('email','badya').isEmail(),
  body('password',"hbaugcb").exists(),
],async(req,res)=>{
  let success =false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
 

  const {email,password}=req.body;
  try{
    let user = await  UserSignin.findOne({email});
    console.log(user);
    if (!user){
      success=false;
        return res.status(400).json({error:"sorry user dose not  exists "});
    }

    const comparePassword=await bcrypt.compare(password,user.password);
    if(!comparePassword){
      success=false;
      
      return res.status(400).json({success , error:"sorry apple  user dose not  exists "});
    }
    const payload={
      user:{
        id:user.id
      }
     
    }
    const authtoken =jwt.sign(payload,JWT_SECRET);
    success= true;
    const toast=`${email} just login in`;
    res.json({success,toast,authtoken}) 
  }catch(error){
    console.error(error.message);
    res.status(500).send("internal  backend  ki error")
}
});


router.post ('/getuser',fetchUser,async(req,res)=>{
  try{
    userID=req.user.id;
    const user = await UserSignin.findById(userID).select("-password")
    res.send(user);
  }catch(error){
    console.error(error.message);
    res.status(500).send("internal  backend  ki error")
  }
  }); 

module.exports=router;