import axios from "axios";
import { API_SERVER_HOST } from "./commonApi";
import { Await } from "react-router-dom";

export const Notice= async () => {
  console.log("notice가 가동되었다.");
  const res = await axios.get(`${host}/api/notice/all`);
  return res.data;
};