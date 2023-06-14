const express = require('express');
const ImageSchema =require('../modules/Imagesave');
const ImageSchema1 =require('../modules/Imagesave2');
const ImageSchema2 =require('../modules/Imagesave3');
const ImageSchema3 =require('../modules/Imagesave4');
const ImageSchema4 =require('../modules/Imagesave5');
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



const Storagee2 =multer.diskStorage({
    destination:'uploads3',
    filename:(req,file,cb)=>{
        cb(null, file.originalname);
    }
 })
 const upload3 = multer({
    storage:Storagee2
 }).single('image')




const Storagee3 =multer.diskStorage({
    destination:'uploads4',
    filename:(req,file,cb)=>{
        cb(null, file.originalname);
    }
 })
 const upload4 = multer({
    storage:Storagee3
 }).single('image')


const Storagee4 =multer.diskStorage({
    destination:'uploads5',
    filename:(req,file,cb)=>{
        cb(null, file.originalname);
    }
 })
 const upload5 = multer({
    storage:Storagee4
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

router.get('/getallimages',fetchUser,async(req,res)=>{
    try{
        console.log(req.user.id);
        const images = await ImageSchema.find({user:req.user.id})
        res.json({images})
    }catch(error){
       res.status(500).send("you are sendinding the wrong data")
    }

})


// http://backend-production-e1c2.up.railway.app/api/auth/createuser 


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















router.post('/saveimagedata2',fetchUser,async(req,res)=>{
    try{
        upload3(req,res,(err)=>{
            if(err){
                console.log(err);
            }else{
                const newImage =new ImageSchema2({
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

router.get('/getallimagesdata2',fetchUser,async(req,res)=>{
    try{
        console.log(req.user.id);
        const images = await ImageSchema2.find({user:req.user.id})
        res.json({images})
    }catch(error){
       res.status(500).send("you are sendinding the wrong data")
    }

})
router.delete('/deleteImagedata2/:id',fetchUser,async(req,res)=>{
    try{
        let images = await ImageSchema2.findById(req.params.id)
        // console.log(req.params.id);
        // console.log(images._id.toString());
        // console.log(images.user.toString());
        // console.log(req.user.id);
        if(!images){return res.status(404).send('not found')}
    if (images.user.toString()!==req.user.id){
        return res.status(401).send('Hacker')
    }   
    images = await ImageSchema2.findByIdAndDelete(req.params.id)  
    res.json({"Sucess":true,images:images})
    }catch(error){
        res.status(500).send("you are sendinding the wrong data")
    }
})



router.post('/saveimagedata3',fetchUser,async(req,res)=>{
    try{
        upload4(req,res,(err)=>{
            if(err){
                console.log(err);
            }else{
                const newImage =new ImageSchema3({
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

router.get('/getallimagesdata3',fetchUser,async(req,res)=>{
    try{
        console.log(req.user.id);
        const images = await ImageSchema3.find({user:req.user.id})
        res.json({images})
    }catch(error){
       res.status(500).send("you are sendinding the wrong data")
    }

})
router.delete('/deleteImagedata3/:id',fetchUser,async(req,res)=>{
    try{
        let images = await ImageSchema3.findById(req.params.id)
        // console.log(req.params.id);
        // console.log(images._id.toString());
        // console.log(images.user.toString());
        // console.log(req.user.id);
        if(!images){return res.status(404).send('not found')}
    if (images.user.toString()!==req.user.id){
        return res.status(401).send('Hacker')
    }   
    images = await ImageSchema3.findByIdAndDelete(req.params.id)  
    res.json({"Sucess":true,images:images})
    }catch(error){
        res.status(500).send("you are sendinding the wrong data")
    }



router.post('/saveimagedata4',fetchUser,async(req,res)=>{
    try{
        upload5(req,res,(err)=>{
            if(err){
                console.log(err);
            }else{
                const newImage =new ImageSchema4({
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

router.get('/getallimagesdata4',fetchUser,async(req,res)=>{
    try{
        console.log(req.user.id);
        const images = await ImageSchema4.find({user:req.user.id})
        res.json({images})
    }catch(error){
       res.status(500).send("you are sendinding the wrong data")
    }

})
router.delete('/deleteImagedata4/:id',fetchUser,async(req,res)=>{
    try{
        let images = await ImageSchema4.findById(req.params.id)
        // console.log(req.params.id);
        // console.log(images._id.toString());
        // console.log(images.user.toString());
        // console.log(req.user.id);
        if(!images){return res.status(404).send('not found')}
    if (images.user.toString()!==req.user.id){
        return res.status(401).send('Hacker')
    }   
    images = await ImageSchema4.findByIdAndDelete(req.params.id)  
    res.json({"Sucess":true,images:images})
    }catch(error){
        res.status(500).send("you are sendinding the wrong data")
    }


})

})










module.exports=router;