const express = require('express')
const { Client, MusicClient } = require("youtubei");
const {Innertube} = require("youtubei.js");
const youtube = new Client();
const path = require('path');
const app = express()
// Serve static files from the "public" directory
app.use(express.static('public'));
app.get("/getVideoTitles", async (req, res) => {
  try {
    const yt = await Innertube.create();
let channel = await yt.getChannel("UCeKV7xdi2KujUGinkmWG8DQ");
let videos = await channel.getVideos();
  let videosinfo = [];                       let data = videos.videos;
    let title = data.map((data) => data.title.text);
    let des = data.map((data) => data.description_snippet.text > 100? data.description_snippet.text.slice(0, 100) : data.description_snippet.text);
    let thumbnail = data.map((x, i)=> x.thumbnails[0].url);
    let views = data.map(x => x.view_count.text);
    let published = data.map(x => x.published.toString());
    for(var i = 0; i < 10; i++){
      const newdata = {
        title: title[i],
        des: des[i],
        thumbnail: thumbnail[i],
        views: views[i],
        published: published[i]
      }
    videosinfo.push(newdata)
    }
    res.json(videosinfo);
  } catch (error) {
    console.error("Error fetching video titles:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});
// Example route to serve your HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
  
});