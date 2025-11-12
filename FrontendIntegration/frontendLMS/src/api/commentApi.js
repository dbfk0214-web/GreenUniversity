import axios from "axios";
import { API_SERVER_HOST } from "./commonApi";
import { Await } from "react-router-dom";

export const comment = async () => {
  console.log("comment가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/community/commentlist`);
  return res.data;
};

