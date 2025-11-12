import axios from "axios";
import { API_SERVER_HOST } from "./commonApi";
import { Await } from "react-router-dom";

export const board = async () => {
  console.log("boarde가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/community/board/all`);
  return res.data;
};