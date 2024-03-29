const OpenAI = require("openai");

const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");


const openai = new OpenAI({
  //TODO: change the key here to run ChatGPT
  apiKey: "",
});


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
    messages : [
        {
            "role": "user",
            "content": prompt
        }
    ]
  });
  console.log(completion.choices[0].message.content);
  res.send(completion.choices[0].message.content);
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

//run node server.js