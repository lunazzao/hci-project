import axios from "axios";

export default async function getVideoFromPrompt(prompt) {
  const GPT_HTTP = "http://localhost:8080/video";
  console.log(prompt);
  let response = await axios.post(`${GPT_HTTP}`, { prompt });
  return response.data;
}
