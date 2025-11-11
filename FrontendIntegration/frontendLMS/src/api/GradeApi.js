import axios from "axios";
import { API_SERVER_HOST } from "./commonApi";
import { Await } from "react-router-dom";

export const grade = async () => {
  console.log("grade가 가동되었다.");
  const res = await axios.get(`${host}/api/grade/all`);
  return res.data;
};