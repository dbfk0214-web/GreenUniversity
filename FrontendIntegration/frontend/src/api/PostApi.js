import axios from "axios";
import { API_SERVER_HOST } from "./commonApi";
import { Await } from "react-router-dom";

const Post = async () => {
  console.log("Post가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/post/all`);
  return res.data;
};

export default {Post};