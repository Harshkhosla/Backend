const express = require('express');
const router = express.Router();
var fetchUser= require('../middleware/fetchuser')
const infornation =require("../modules/Information")
const { body, validationResult } = require('express-validator');

router.post('/information',[fetchUser,[
    body('name','Characters in name should be more than 3 ').isLength({ min: 3 }),
body('email',"Please enter a valid Email").isEmail(),
body('adharNo',"Characters in Adhar should be more than 9").isLength({ min: 9 }),
body('PhoneNo',"Characters in PhoneNo should be 10").isLength({ min: 10,max:10 })
]],async(req,res)=>{
    try{
        const errors = validationResult(req);
        let user =await infornation.findOne({email:req.body.email});
  if (user){
      return res.status(400).json({error:"Sorry user already exists "})
  }
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const {name,email,Adress,adharNo,PhoneNo}=req.body
        const information =new  infornation({
            name,email,Adress,adharNo,PhoneNo,user:req.user.id
        })
        const SaveInformation = await information.save()
        res.json(SaveInformation)
       
    }catch(error){
        // console.error(error.message);
        res.status(500).send("backend ki error")
    }

    
    
 
})
module.exports=router;  