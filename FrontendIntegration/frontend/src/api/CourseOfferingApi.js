import axios from "axios";
import { API_SERVER_HOST } from "./commonApi";
import { Await } from "react-router-dom";

const CourseOffering = async () => {
  console.log("courseOffering이 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/courseoffering/all`);
  return res.data;
};

export default {CourseOffering};