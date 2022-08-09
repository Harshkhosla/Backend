const express = require('express');
const PdfData =require('../modules/PdfSave');
const router = express.Router();
const multer=require('multer')
var fetchUser= require('../middleware/fetchuser');
// const { default: userEvent } = require('@testing-library/user-event');
const Storage =multer.diskStorage({
    destination:'datas',
    filename:(req,file,cb)=>{
        cb(null, file.originalname);
    }
 })
 const datas = multer({
    storage:Storage
 }).single('file')

 router.post('/savePdf',fetchUser,async(req,res)=>{
  try{
    datas(req,res,(err)=>{
        if(err){
            // console.log(err);
        }else{
            const newPdf = new PdfData ({
                name: req.body.name,
                schema:req.user.id,  
                pdf:req.file.path
            }) 
            newPdf.save()
            .then(()=>res.send('suscessfully uploaded'))
            .catch((err)=>console.log(err))
        }
    })
  }catch(error){
    console.error(error.message);
    res.status(500).send("backend ki error")
  }
 })
 router.get('/getallPdf/:id',async(req,res)=>{
    try{
        const PDF = await PdfData.find({schema:req.params.id})
        // console.log(PDF);
        res.json({PDF})
    }catch(error){
       res.status(500).send("you are sending the wrong data")
    }

})



module.exports=router;