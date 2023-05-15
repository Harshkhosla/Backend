const express = require('express');
const router = express.Router();
var fetchUser= require('../middleware/fetchuser')
const information =require("../modules/Information")
const { body, validationResult } = require('express-validator');

// router.post('/information/:id',[fetchUser],async(req,res)=>{
//     try{
//         const errors = validationResult(req);
//         let user =await information.findOne({email:req.body.email});
//   if (user){
//       return res.status(400).json({error:"Sorry user already exists "})
//   }
//   const {email,name,Adress,adharNo,PhoneNo}=req.body
//   const newInformation={}
//   if(name){newInformation.name=name}
//   if(email){newInformation.email=email} 
//   let information =await information.findById(req.params.id);

//   if(!information){information =new information({
//     name,email,Adress,adharNo,PhoneNo,user:req.user.id
//     // -------------------------------------- addressLine1:Adress[0].addressLine1--------------------------------------------------//
// })
// const SaveInformation = await information.save()
// res.json(SaveInformation)
// }

//     if (information.user!=req.user.id){
//         return res.status(401).send('Hacker')
//     } information = await information.findByIdAndUpdate(req.params.id,{$set:newInformation},{new:true})


         
//         res.json(information)
       
//     }catch(error){
//         // console.error(error.message);
//         res.status(500).send("Somthing went wrong")
//     }
 
 
// })



//----------------------------------------------------------need to check this------------------------------------------------------------------//

router.post('/information',[fetchUser],async(req,res)=>{
    try{
        const errors = validationResult(req);
        let user =await information.findOne({email:req.body.email});
  if (user){
      return res.status(400).json({error:"Sorry user already exists "})
  }   
        const name =req.body.name
        const {email,Adress,adharNo,PhoneNo}=req.body
        const information =new  information({
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
        
        const notes =await information.find({user:req.user.id})
        res.json(notes)
    }catch(error){
        console.error(error.message);
        res.status(500).send("backend ki error")
    }
})

module.exports=router;  