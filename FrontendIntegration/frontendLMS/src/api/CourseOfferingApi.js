import axios from "axios";
import { API_SERVER_HOST } from "./commonApi";
import { Await } from "react-router-dom";

export const courseOffering = async () => {
  console.log("courseOffering이 가동되었다.");
  const res = await axios.get(`${host}/api/courseoffering/all`);
  return res.data;
};