import axios from "axios";
import { API_SERVER_HOST } from "./commonApi";
import { Await } from "react-router-dom";

export const review = async () => {
  console.log("review가 가동되었다.");
  const res = await axios.get(`${host}/api/review/all`);
  return res.data;
};