const express = require('express');
const router = express.Router();
var fetchUser= require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');
const Taskep =require('../modules/Taskep');
// const { pdf } = require('react-native-ico-file-folder/src/data');
// const pdfTemplate = require('./documents');
// const pdf = require('html-pdf');




// router.get('/fetchallnotes',fetchUser,async(req,res)=>{
//     try{
        
//         const notes =await Notes.find({user:req.user.id})
//         res.json(notes)
//     }catch(error){
//         console.error(error.message);
//         res.status(500).send("backend ki error")
//     }
// })



router.post('/Taskep',[fetchUser,[ 
    // body('title','Enter a valid title').isLength({ min: 3 }),
    // body('discription','description must be 5 characters').isLength({ min: 5}),
     
]],async(req,res)=>{
    try{

        const {Project,Task,TaskDescription,TotalTime,Status}=req.body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const note = new Taskep({            
            Project,Task,TaskDescription,TotalTime,Status,user:req.user.id,schema:req.user.id
        })
        const savedNote = await note.save()
        res.json(savedNote)
    }catch(error){
        console.error(error.message);
        res.status(500).send("backend ki error in notes")
    }
})





// router.post('/create-pdf',async(req,res)=>{
    
//         pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
//             if(err) {
//                 res.send(Promise.reject());
//             }
    
//             res.send(Promise.resolve())
//         });
//     });


// router.get('/fetch-pdf', (req, res) => {
//     res.sendFile(`${__dirname}/result.pdf`)
// })
 

// /---------------------------------------
// router.put('/updatenote/:id',fetchUser,async(req,res)=>{
//     const {title,discription}=req.body;
//     // debugger
//     const newNote={}
//     if(title){newNote.title=title}
//     if(discription){newNote.discription=discription}    

//     let note =await Notes.findById(req.params.id);
//     // console.log(note);
//     if(!note){return res.status(404).send('not found')}
//     if (note.user!=req.user.id){
//         return res.status(401).send('Hacker')
//     }
//     note = await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
//     res.json({note})

// })
// router.delete('/deletenote/:id',fetchUser,async(req,res)=>{
//     // debugger
   
//     let note =await Notes.findById(req.params.id);
//     // console.log(note);
//     if(!note){return res.status(404).send('not found')}
//     if (note.user!=req.user.id){
//         return res.status(401).send('Hacker')
//     }
//     note = await Notes.findByIdAndDelete(req.params.id) 
//     res.json({"Sucess":true,note:note})

// })
// router.get('/deletenoteee',(req,res)=> {
//     const obj = {
//       name: req.body
//     }
//       // const name = req.body
//     console.log(obj);
//     // res.send(req.body)
//     res.send("hello")
//     })


module.exports=router;  