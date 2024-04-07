import React, { useState } from "react";
import axios from "axios";
import "./youtube.css";

export default function YoutubeVideo({ videoIDs }) {
  const [title, setTitle] = useState("");
  const [embed, setEmbed] = useState("");
  const HTTP = "http://localhost:8080/video";
  console.log(videoIDs);
  const params = { videoIDs: videoIDs };
  axios
    .get(`${HTTP}`, { params })
    .then((res) => {
      setTitle(res.data.title);
      setEmbed(res.data.embedHtml);
      console.log(res.data.embedHtml);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="card py-2 m-3 video-card">
      <div
        className="card-img-top"
        dangerouslySetInnerHTML={{ __html: embed }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
}
