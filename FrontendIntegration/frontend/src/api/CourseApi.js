import axios from "axios";
import { API_SERVER_HOST } from "./commonApi";
import { Await } from "react-router-dom";

const Course = async () => {
  console.log("Course가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/course/all`);
  return res.data;
};

export default {Course};