const express = require('express');
const router = express.Router();
var fetchUser= require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');
const UniqueId =require('../modules/Uniqueid');
const Notes =require('../modules/Notes');
const ImageSchema =require('../modules/Imagesave');
const UserSignin =require('../modules/UserSignin');
const multer =require('multer');
const Imagesave = require('../modules/Imagesave');


router.post('/healthId',async(req,res)=>{
        try{
            let user =await Notes.find({schema:req.body.schema});
            let Images =await ImageSchema.find({schema:req.body.schema});
            let alldata =  [user, Images]
        // const notes =await Notes.find({schema:req.user.id})
            res.json(alldata)
            // console.log(alldata)
        }catch(error){
            console.error(error.message);
            res.status(500).send("backend ki error")
        }
    })
      

module.exports=router; 