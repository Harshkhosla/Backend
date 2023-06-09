function sendDataToClient(ws,sample ) {
    console.log(sample);
    // console.log(message);

    // console.log("topic ic comming",topic);
    // const messageToSend = `Data from the server - Topic:${topic} `;
    // Send data to the client
    ws.send(sample);
  
    // Schedule the next data send after a delay (e.g., 1 second)
    setTimeout(() => {
      sendDataToClient(ws,sample);
    }, 1000);
  }
  
  module.exports = { sendDataToClient };
  
