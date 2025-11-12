import axios from "axios";
import { API_SERVER_HOST } from "./commonApi";
import { Await } from "react-router-dom";

const Review = async () => {
  console.log("review가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/review/all`);
  return res.data;
};

export default {Review};