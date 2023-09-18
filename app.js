const express = require('express')
const { Client, MusicClient } = require("youtubei");
const youtube = new Client();
const app = express()

app.use(express.static('public'))
app.get('/api/videos', async (req, res) => {
  try {
    const videoData = "hanuman chalisa";

      const videoSearchResults = await youtube.search.video(videoData);
      
      const youtubeDataPromises = videoSearchResults[0];

    const youtubeData = await Promise.all(youtubeDataPromises);
    res.json(youtubeData);
    
  } catch (error) {
    console.error(`Error: ${error}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


  app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
  
});