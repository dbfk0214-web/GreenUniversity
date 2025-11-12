import axios from "axios";
import { API_SERVER_HOST } from "./commonApi";
import { Await } from "react-router-dom";

export const Comment = async () => {
  console.log("comment가 가동되었다.");
  const res = await axios.get(`${host}/community/comment/read/{cid}`);
  return res.data;
};