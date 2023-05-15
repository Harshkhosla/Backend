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

// require('http1')
// .createServer(app)
// .listen(port,()=>{
//   console.log(`Example app listening on port ${port}`)
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


app.get('/', (req,res,next)=> {
  res.set('Server', 'MyServer/1.0 (Node.js) HTTP/1.0');

  // Get the HTTP version
  const httpVersion = req.httpVersion;

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`HTTP Version: ${httpVersion}`);
  // return res.send("We are up and running", res.getHeaders());
  // return res.send(res.header("httpVersion"));

});
