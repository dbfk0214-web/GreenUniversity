import axios from "axios";
import { API_SERVER_HOST } from "./commonApi";
import { Await } from "react-router-dom";

export const enrollment = async () => {
  console.log("enrollment가 가동되었다.");
  const res = await axios.get(`${host}/api/enrollment`);
  return res.data;
};