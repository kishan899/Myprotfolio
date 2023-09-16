const express = require('express')
const { Client, MusicClient } = require("youtubei");
const youtube = new Client();
const app = express()
app.get('/api/bot-info', async (req, res) => {
  
    const videos =  await youtube.search("Hanuman chalisha", {
        type: "video", // video | playlist | channel | all
    });
videos.then((respone) => {
 console.log(respone.items)
  res.send(respone)
}
)
});
  app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
  
});