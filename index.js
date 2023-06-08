const ConnectToMongo = require('./db');
const express = require('express')
const cors = require('cors');

ConnectToMongo();

const app = express()
const port = process.env.PORT || 5000;
// app.set("httpVersion","1.0")
app.use(cors())

app.use(express.json())
app.use('/uploads',express.static('uploads'))
app.use('/datas',express.static('datas'))
app.use(
  express.urlencoded({extended:true})
)

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.use('/api/Taskep',require('./routes/Taskep'))
app.use('/api/health',require('./routes/healthId'))
app.use('/api/Image',require('./routes/Imagedata'))
app.use('/api/pdf',require('./routes/pdfData'))
app.use('/api/information',require('./routes/Information'))
app.use('/api/subscriber',require('./routes/subscriber'))
app.use('/api/publisher',require('./routes/publisher'))
// app.use('/admin',require('./routes/admin'))


// require('http1')
// .createServer(app)
// .listen(port,()=>{
//   console.log(`Example app listening on port ${port}`)
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


app.get('/', (req,res,next)=> {

  return res.json("We are up and running");

});