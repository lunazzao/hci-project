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

const app = express();
app.use(bodyParser.json());
app.use(cors());

// endpoint for ChatGPT

app.post("/chat", async (req, res) => {
  const { prompt } = req.query;
  console.log("i said:" + prompt);

  /*
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    max_tokens: 512,
    temperature: 0,
    messages: [
      {
        role: "system",
        content:
          "You are helping senior citizens find exercise tutorials on YouTube that are appropriate for their physical health. When given a prompt you will take in the health data and send back a search query to find an approprite exercise tutorial on YouTube. You will not include anything in your response other than the search query.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });
  console.log(completion.choices[0].message.content);
  res.send(completion.choices[0].message.content);
  */
  res.send("eep");
});

app.post("/video", async (req, res) => {
  const { prompt } = req.body;
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    max_tokens: 512,
    temperature: 0,
    messages: [
      {
        role: "system",
        content:
          "You are helping senior citizens find exercise tutorials on YouTube that are appropriate for their physical health. When given a prompt you will take in the health data and send back a search query to find an approprite exercise tutorial on YouTube. You will not include anything in your response other than the search query.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const searchQuery = completion.choices[0].message.content;
  console.log(searchQuery);

  youtubeService.search.list(
    {
      auth: googleAPIKey,
      part: "snippet",
      q: searchQuery,
      maxResults: 1,
      safeSearch: "moderate",
      type: "video",
    },
    function (err, response) {
      if (err) {
        console.log("The API returned an error: " + err);
        res.status(404).send();
        return;
      }
      var video = response.data.items;
      if (video.length === 0) {
        console.log("No video found.");
        // Send back a known good video
        title = "15-minute Workout for Older Adults";
        embedHtml = `<iframe width="800px" height="450" src="https://www.youtube-nocookie.com/embed/Ev6yE55kYGw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
        mobileEmbedHtml = `<iframe width="350px" height="195px" src="https://www.youtube-nocookie.com/embed/Ev6yE55kYGw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
        res.send({
          title,
          embedHtml,
          mobileEmbedHtml,
        });
      } else {
        title = video[0].snippet.title;
        embedHtml = `<iframe width="800px" height="450" src="https://www.youtube-nocookie.com/embed/${video[0].id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
        mobileEmbedHtml = `<iframe width="350px" height="195px" src="https://www.youtube-nocookie.com/embed/${video[0].id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
        res.send({
          title,
          embedHtml,
          mobileEmbedHtml,
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
