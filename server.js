const OpenAI = require("openai");

const express = require("express");

var { google } = require("googleapis");

const cors = require("cors");

require("dotenv").config();

const bodyParser = require("body-parser");
const { unstable_renderSubtreeIntoContainer } = require("react-dom");

const openai = new OpenAI({
  //TODO: change the key here to run ChatGPT
  apiKey: process.env.OPENAI_API_KEY,
});

const youtubeService = google.youtube("v3");

const googleAPIKey = process.env.GOOGLE_API_KEY;

// Setup server

const app = express();
app.use(bodyParser.json());
app.use(cors());

// endpoint for ChatGPT

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;
  console.log("i said:" + req.body);

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    max_tokens: 512,
    temperature: 0,
    messages: [
      {
        role: "system",
        content:
          "You are helping senior citizens find exercise tutorials on YouTube that are appropriate for their physical health. When given a prompt you will take in the health data and send back a list of 5 YouTube links to appropriate exercise tutorials. The tutorials should be designed for older adults. You will only respond with the list of links in this format: `[link1, link2, link3, link4, link5]`",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });
  console.log(completion.choices[0].message.content);
  res.send(completion.choices[0].message.content);
});

app.get("/video", async (req, res) => {
  const { videoIDs } = req.query;
  console.log(videoIDs);

  if (
    videoIDs === null ||
    videoIDs === undefined ||
    !(videoIDs instanceof Array) ||
    videoIDs.length === 0
  ) {
    res.status(400).send();
  }

  youtubeService.videos.list(
    {
      auth: googleAPIKey,
      id: [videoIDs.join(",")],
      part: "snippet,player",
    },
    function (err, response) {
      if (err) {
        console.log("The API returned an error: " + err);
        res.status(404).send();
        return;
      }
      var videos = response.data.items;
      if (videos.length === 0) {
        console.log("No video found.");
        res.status(404).send();
        return;
      } else {
        title = videos[0].snippet.title;
        thumbnail = videos[0].snippet.thumbnails.standard;
        embedHtml = videos[0].player.embedHtml;
        thumbnail,
          res.send({
            title,
            thumbnail,
            embedHtml,
          });
      }
    }
  );
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

//run node server.js
