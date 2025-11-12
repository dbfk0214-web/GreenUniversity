import axios from "axios";
import { API_SERVER_HOST } from "./commonApi";
import { Await } from "react-router-dom";

const Grade = async () => {
  console.log("grade가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/grade/all`);
  return res.data;
};

export default {Grade};