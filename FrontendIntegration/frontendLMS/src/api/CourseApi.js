import axios from "axios";
import { API_SERVER_HOST } from "./commonApi";
import { Await } from "react-router-dom";

export const course = async () => {
  console.log("Course가 가동되었다.");
  const res = await axios.get(`${host}/api/course/all`);
  return res.data;
};