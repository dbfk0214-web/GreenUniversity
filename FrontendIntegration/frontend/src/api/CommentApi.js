import axios from "axios";
import { API_SERVER_HOST } from "./commonApi";
import { Await } from "react-router-dom";

const Comment = async () => {
  console.log("comment가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/community/comment/read/{cid}`);
  return res.data;
};

export default {Comment};