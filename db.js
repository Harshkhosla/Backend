const mongoose = require('mongoose')
const mongoURI ="mongodb+srv://harsh:Harsh9945khosla@cluster0.osfevs6.mongodb.net/test";
// mongodb+srv://harsh:Harsh9945khosla@cluster0.osfevs6.mongodb.net/test
// mongodb://localhost:27017
const ConnectToMongo =()=>{
    mongoose.connect(mongoURI,()=>{
        
        console.log("gooog connected to backend");
    })
}
module.exports = ConnectToMongo;