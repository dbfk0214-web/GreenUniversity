import axios from "axios";
import { API_SERVER_HOST } from "./commonApi";
import { Await } from "react-router-dom";

const Board = async () => {
  console.log("boarde가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/community/Board/all`);
  return res.data;
};

const readOne = async () => {
  console.log("boarde가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/community/Board/all`);
  return res.data;
};

export default {Board,readOne};