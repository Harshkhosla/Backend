const ConnectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
const WebSocket = require('ws');
const http = require('http');

ConnectToMongo();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/datas', express.static('datas'));
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/Taskep', require('./routes/Taskep'));
app.use('/api/health', require('./routes/healthId'));
app.use('/api/Image', require('./routes/Imagedata'));
app.use('/api/pdf', require('./routes/pdfData'));
app.use('/api/information', require('./routes/Information'));
app.use('/api/subscriber', require('./routes/subscriber'));
app.use('/api/publisher', require('./routes/publisher'));

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('WebSocket client connected');

  ws.on('message', (message) => {
    console.log('Received message:', message);

    // Process the received message as needed

    // Example: Echo the message back to the WebSocket client
    ws.send(`You sent: ${message}`);
  });

  ws.on('close', () => {
    console.log('WebSocket client disconnected');
  });
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res, next) => {
  return res.json('We are up and running');
});
