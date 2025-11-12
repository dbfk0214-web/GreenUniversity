import axios from "axios";
import { API_SERVER_HOST } from "./commonApi";
import { Await } from "react-router-dom";

export const department = async () => {
  console.log("department가 가동되었다.");
  const res = await axios.get(`${host}/api/department`);
  return res.data;
};