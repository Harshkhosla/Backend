const express = require('express');
const ImageSchema =require('../modules/Imagesave');
const ImageSchema1 =require('../modules/Imagesave2');
const router = express.Router();
const multer=require('multer')
var fetchUser= require('../middleware/fetchuser');
// const { default: userEvent } = require('@testing-library/user-event');
const Storage =multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        cb(null, file.originalname);
    }
 })
 const upload = multer({
    storage:Storage
 }).single('image')


const Storagee =multer.diskStorage({
    destination:'uploads2',
    filename:(req,file,cb)=>{
        cb(null, file.originalname);
    }
 })
 const upload2 = multer({
    storage:Storagee
 }).single('image')






router.post('/saveimage',fetchUser,async(req,res)=>{
    try{
        upload(req,res,(err)=>{
            if(err){
                console.log(err);
            }else{
                const newImage =new ImageSchema({
                    name: req.body.name,
                    user:req.user.id,
                    schema:req.user.id,  
                    image:req.file.path
                }) 
                newImage.save()
               
                .then(()=>res.send('suscessfully uploaded'))
                .catch((err)=>console.log(err))
            }
        })
    }catch(error){
        // console.error(error.message);
        res.status(500).send("backend ki error")
    }

    
    
 
})





router.post('/saveimagedata',fetchUser,async(req,res)=>{
    try{
        upload2(req,res,(err)=>{
            if(err){
                console.log(err);
            }else{
                const newImage =new ImageSchema1({
                    name: req.body.name,
                    user:req.user.id,
                    schema:req.user.id,  
                    image:req.file.path
                }) 
                newImage.save()
               
                .then(()=>res.send('suscessfully uploaded'))
                .catch((err)=>console.log(err))
            }
        })
    }catch(error){
        // console.error(error.message);
        res.status(500).send("backend ki error")
    }

    
    
 
})

router.get('/getallimagesdata',fetchUser,async(req,res)=>{
    try{
        console.log(req.user.id);
        const images = await ImageSchema1.find({user:req.user.id})
        res.json({images})
    }catch(error){
       res.status(500).send("you are sendinding the wrong data")
    }

})
router.delete('/deleteImagedata/:id',fetchUser,async(req,res)=>{
    try{
        let images = await ImageSchema1.findById(req.params.id)
        // console.log(req.params.id);
        // console.log(images._id.toString());
        // console.log(images.user.toString());
        // console.log(req.user.id);
        if(!images){return res.status(404).send('not found')}
    if (images.user.toString()!==req.user.id){
        return res.status(401).send('Hacker')
    }   
    images = await ImageSchema1.findByIdAndDelete(req.params.id)  
    res.json({"Sucess":true,images:images})
    }catch(error){
        res.status(500).send("you are sendinding the wrong data")
    }
})
router.get('/getallimages',fetchUser,async(req,res)=>{
    try{
        console.log(req.user.id);
        const images = await ImageSchema.find({user:req.user.id})
        res.json({images})
    }catch(error){
       res.status(500).send("you are sendinding the wrong data")
    }

})
router.delete('/deleteImage/:id',fetchUser,async(req,res)=>{
    try{
        let images = await ImageSchema.findById(req.params.id)
        // console.log(req.params.id);
        // console.log(images._id.toString());
        // console.log(images.user.toString());
        // console.log(req.user.id);
        if(!images){return res.status(404).send('not found')}
    if (images.user.toString()!==req.user.id){
        return res.status(401).send('Hacker')
    }   
    images = await ImageSchema.findByIdAndDelete(req.params.id)  
    res.json({"Sucess":true,images:images})
    }catch(error){
        res.status(500).send("you are sendinding the wrong data")
    }
})














module.exports=router;