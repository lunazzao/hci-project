import React, { useState } from "react";
import axios from "axios";
import "./chatGPT.css";

export default function ChatGPT() {
  const [prompt, setPrompt] = useState("");
  const GPT_HTTP = "http://localhost:8080/chat";
  const beforeID = "?v=";

  const [title, setTitle] = useState("");
  const [embed, setEmbed] = useState("");
  const [helpText, setHelpText] = useState(
    //"Ask me anything... Type in message and click ENTER"
    ""
  );
  const YOUTUBE_HTTP = "http://localhost:8080/video";

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${GPT_HTTP}`, { prompt })
      .then((res) => {
        let videoIDs = [];
        let response = res.data;
        for (let i = 0; i < 5; i++) {
          let nextIDIndex = response.indexOf(beforeID);
          if (nextIDIndex === -1) {
            break;
          }
          videoIDs.push(
            response.substring(
              nextIDIndex + beforeID.length,
              nextIDIndex + beforeID.length + 11
            )
          );
          response = response.substring(nextIDIndex + beforeID.length + 11);
        }

        if (videoIDs.length > 0) {
          const params = { videoIDs: videoIDs };
          axios
            .get(`${YOUTUBE_HTTP}`, { params })
            .then((res) => {
              setTitle(res.data.title);
              setEmbed(res.data.embedHtml);
            })
            .catch((error) => {
              setHelpText("Sorry! We couldn't find a video for that.");
              setTitle("");
              setEmbed("");
            });
        } else {
          setHelpText("Sorry! We couldn't find a video for that.");
          setTitle("");
          setEmbed("");
        }
      })
      .catch((error) => {
        setHelpText("Sorry! We couldn't find a video for that.");
        setTitle("");
        setEmbed("");
      });
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="container container-sm p-1">
      {" "}
      <h1 className="title text-center text-darkGreen">ChatGPT API</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Ask questions</label>
          <input
            className="shadow-sm"
            type="text"
            placeholder="Enter text"
            value={prompt}
            onChange={handlePrompt}
          />
        </div>{" "}
        {/* <button className="btn btn-accept w-100" type="submit">
          Go
        </button> */}
      </form>
      {title.length > 0 ? (
        <div className="card py-2 m-3 video-card">
          <div
            className="card-img-top"
            dangerouslySetInnerHTML={{ __html: embed }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
      ) : helpText.length > 0 ? (
        <div className="bg-darkGreen text-center mt-2 p-1 border-5">
          <p className="text-light">{helpText}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
