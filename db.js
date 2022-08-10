const mongoose = require('mongoose')
const mongoURI ="mongodb+srv://harsh:Harsh9945khosla@cluster0.osfevs6.mongodb.net/test";
const ConnectToMongo =()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("gooog connected to backend");
    })
}
module.exports = ConnectToMongo;