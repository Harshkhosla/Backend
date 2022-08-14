const express = require('express');
const router = express.Router();
var fetchUser= require('../middleware/fetchuser')
const infornation =require("../modules/Information")
const { body, validationResult } = require('express-validator');

router.post('/information',[fetchUser],async(req,res)=>{
    try{
        const errors = validationResult(req);
        let user =await infornation.findOne({email:req.body.email});
  if (user){
      return res.status(400).json({error:"Sorry user already exists "})
  }
        
   
        const name =req.body.name
        const {email,Adress,adharNo,PhoneNo}=req.body
        const information =new  infornation({
            name,email,Adress,adharNo,PhoneNo,user:req.user.id
            // -------------------------------------- addressLine1:Adress[0].addressLine1--------------------------------------------------//
        })
        const SaveInformation = await information.save()
        res.json(SaveInformation)
       
    }catch(error){
        // console.error(error.message);
        res.status(500).send("Somthing went wrong")
    }
 
 
})
router.get('/fetchallData',fetchUser,async(req,res)=>{
    try{
        
        const notes =await infornation.find({user:req.user.id})
        res.json(notes)
    }catch(error){
        console.error(error.message);
        res.status(500).send("backend ki error")
    }
})

module.exports=router;  