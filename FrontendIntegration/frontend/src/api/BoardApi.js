import axios from "axios";
import { API_SERVER_HOST } from "./commonApi";
import { Await } from "react-router-dom";

export const Board = async () => {
  console.log("boarde가 가동되었다.");
  const res = await axios.get(`${host}/community/Board/all`);
  return res.data;
};